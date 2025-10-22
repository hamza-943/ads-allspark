import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",     // expose as CSS var
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// app/layout.tsx (or app/(whatever)/layout.tsx)
// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-sans",     // expose as CSS var
//   display: "swap",
// });



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${plusJakarta.variable} font-sans antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }
