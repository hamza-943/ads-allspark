// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

// Define TypeScript interface for the request body
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
  captchaToken?: string;
}

// Define response type
type ApiResponse = 
  | { message: string; contact: any }
  | { error: string; missing?: Record<string, boolean>; details?: string };

// Configure CORS middleware
const allowCors = (fn: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

// Main handler function
const handler = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: `Method ${req.method} Not Allowed. Use POST.` 
    });
  }

  try {
    // Parse and validate request body
    const body = req.body as ContactFormData;
    
    if (!body) {
      return res.status(400).json({ 
        error: 'Request body is required' 
      });
    }

    const { name, email, phone, message, service, captchaToken } = body;

    // Validate required fields
    const missingFields = [];
    if (!name?.trim()) missingFields.push('name');
    if (!email?.trim()) missingFields.push('email');
    if (!phone?.trim()) missingFields.push('phone');
    if (!message?.trim()) missingFields.push('message');

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missingFields.join(', ')}`,
        missing: {
          name: !name?.trim(),
          email: !email?.trim(),
          phone: !phone?.trim(),
          message: !message?.trim()
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ 
        error: 'Invalid email address format' 
      });
    }

    // Save to database
    const newContact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        service: service?.trim() || 'General Inquiry',
        captchaToken: captchaToken?.trim() || null,
      },
    });

    // Return success response
    return res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: newContact.id,
        name: newContact.name,
        email: newContact.email,
        createdAt: newContact.createdAt
      }
    });

  } catch (error: any) {
    console.error('API Error:', error);

    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(409).json({
        error: 'A contact with this email already exists'
      });
    }

    if (error.code === 'P1001') {
      return res.status(500).json({
        error: 'Database connection failed. Please try again later.'
      });
    }

    // Generic error response
    return res.status(500).json({
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Export with CORS middleware
export default allowCors(handler);