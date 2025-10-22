// app/components/CoreWebDevServices.tsx
"use client";

import { ChevronsRight, ShoppingCart, Layers, PanelsTopLeft, FileStack, Code2, Braces } from "lucide-react";
import ServiceCard from "./ServiceCard";

type Service = {
  title: string;
  blurb: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Ecommerce Website Development",
    blurb:
      "Choosing an ecommerce website development company is a big step for any business.",
    href: "/services/ecommerce-development",
    Icon: ShoppingCart,
  },
  {
    title: "Full Stack Web Development",
    blurb:
      "Choosing the right full stack developers can feel overwhelming.",
    href: "/services/full-stack-development",
    Icon: Layers,
  },
  {
    title: "Web Portal Development",
    blurb:
      "Choosing a web portal development company can feel overwhelming.",
    href: "/services/web-portal-development",
    Icon: PanelsTopLeft,
  },
  {
    title: "CMS Development",
    blurb:
      "Choosing the right CMS development company can feel overwhelming.",
    href: "/services/cms-development",
    Icon: FileStack,
  },
  {
    title: "API Development and Integration",
    blurb:
      "Choosing an API development company can get complex.",
    href: "/services/api-development",
    Icon: Braces,
  },
  {
    title: "Custom Web Application Development",
    blurb:
      "We create future-ready software using AI, cloud, and IoT for competitive advantage.",
    href: "/services/custom-web-apps",
    Icon: Code2,
  },
];


export default function CoreWebDevServices() {
  return (
    <section className="bg-[#f6f8fc]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:p-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Core Web Development
            <br className="hidden sm:block" />
            <span className="block">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            We create custom, user-friendly, and scalable solutions designed to meet the
            unique needs of modern businesses. We’re here to help you achieve your goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, blurb, href, Icon }) => (
           <ServiceCard />
          ))}
        </div>
      </div>
    </section>
  );
}
