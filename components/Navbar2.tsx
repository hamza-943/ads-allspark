"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Navbar2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    setIsSidebarOpen(false);

    // If you're NOT on homepage, go to homepage with hash
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // Already on homepage → smooth scroll (no reload)
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // update URL hash without navigation
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <nav
        className={`${plusJakartaSans.className} bg-white relative md:sticky md:top-0 md:left-0 md:w-full md:z-50 flex items-center shadow-md transition-all duration-300 ${
          isSticky ? "md:shadow-lg" : ""
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex-1 flex py-3 items-center justify-around">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/logo.svg" alt="All Spark Logo" width={150} height={150} />
            </Link>
          </div>

          {/* Middle: Nav links (Desktop) */}
          <ul className="hidden space-x-4 !list-none items-center font-medium text-gray-700 lg:flex">
            <li>
              <button
                type="button"
                onClick={() => scrollToId("hero")}
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Home
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToId("portfolio")}
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Portfolio
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToId("services")}
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Services
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToId("why-choose-us")}
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                Why Choose Us
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => scrollToId("faqs")}
                className="text-gray-700 px-4 py-2 transition duration-500 rounded-full font-semibold hover:bg-[#384BFF] hover:text-white"
              >
                FAQs
              </button>
            </li>
          </ul>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-700"
            aria-label="Open Menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right: Get a Quote button (Desktop Only) */}
        <div className="hidden lg:block group relative min-w-[15%] bg-[#384BFF] py-3 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:bg-[#253AC7]">
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="px-4 pl-14 py-2 font-medium text-white transition-colors duration-300 w-full text-left"
          >
            Get a Quote &rarr;
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "66%" }}
            animate={{ x: 0 }}
            exit={{ x: "66%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex"
            style={{ zIndex: 1000 }}
          >
            {/* Left overlay */}
            <div className="w-1/3 bg-black bg-opacity-90" onClick={() => setIsSidebarOpen(false)} />

            {/* Right sidebar */}
            <div className="bg-white w-2/3 z-20 p-4 pt-0 shadow-md flex flex-col relative">
              <div className="flex justify-between">
                <div className="mt-5 text-left">
                  <Link href="/">
                    <Image src="/logo.svg" alt="All Spark Logo" width={150} height={150} />
                  </Link>
                </div>

                <button onClick={() => setIsSidebarOpen(false)} className="mb-4 self-end" type="button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <hr className="mt-3" />

              <nav className="flex flex-col mx-5 mt-10 h-full">
                <ul className="space-y-2 text-gray-900 list-none">
                  <li className="border-b pb-3">
                    <button type="button" onClick={() => scrollToId("hero")} className="w-full text-left">
                      Home
                    </button>
                  </li>
                  <li className="border-b pb-3">
                    <button type="button" onClick={() => scrollToId("services")} className="w-full text-left">
                      Services
                    </button>
                  </li>
                  <li className="border-b pb-3">
                    <button type="button" onClick={() => scrollToId("why-choose-us")} className="w-full text-left">
                      Why Choose Us
                    </button>
                  </li>
                  <li className="border-b pb-3">
                    <button type="button" onClick={() => scrollToId("faqs")} className="w-full text-left">
                      Faqs
                    </button>
                  </li>
                  <li className="border-b pb-3">
                    <button type="button" onClick={() => scrollToId("contact")} className="w-full text-left">
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="mb-4 text-xs border-t w-[90%] absolute bottom-2">
                <div className="max-w-[75%] mx-auto mt-3 text-center">
                  © All Copyright {new Date().getFullYear()} by AllSpark Technologies
                </div>
              </div>
            </div>

            <div className="flex-1" onClick={() => setIsSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
