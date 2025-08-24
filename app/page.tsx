"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const works = [
  {
    id: 1,
    title: "AI Dashboard",
    subtitle: "Details",
    year: "2023",
    tags: ["Web Design", "UI/UX"],
    image: "/work1.png",
  },
  {
    id: 2,
    title: "Squadhub",
    subtitle: "Details",
    year: "2024",
    tags: ["Web Design", "UI/UX"],
    image: "/work1.png",
  },
  {
    id: 3,
    title: "Mobile UX",
    subtitle: "Details",
    year: "2024",
    tags: ["Mobile App", "UI/UX"],
    image: "/work1.png",
  },
];

export default function Home() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  const startRotation = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
    }, 3000);
  };

  const stopRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handlePrev = () => {
    stopRotation();
    setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const handleNext = () => {
    stopRotation();
    setActiveIndex((prev) => (prev + 1) % works.length);
  };

  return (
    <main className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scroll-pt-32">
      {/* Navbar */}
      <nav className="fixed top-4 w-[95%] md:w-[90%] max-w-6xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-white backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg mx-auto left-1/2 -translate-x-1/2 z-50 font-poppins">
        {/* Links (Desktop) */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-[#1b1c4f] text-sm md:text-base font-medium tracking-wide">
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">About</a>
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">Services</a>
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">Portfolio</a>
        </div>

        {/* Brand */}
        <div className="text-[#EE5D00] font-extrabold text-base md:text-lg lg:text-xl tracking-widest">
          TWOCODED
        </div>

        {/* Contact (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border-2 border-[#1b1c4f] text-[#1b1c4f] text-sm px-5 py-2 rounded-xl font-semibold shadow-sm hover:bg-[#1b1c4f] hover:text-white transition duration-300">
            Contact
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-[#1b1c4f] text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl flex flex-col items-center py-4 gap-4 md:hidden z-40"
            >
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[#1b1c4f] hover:text-[#EE5D00] transition"
              >
                About
              </a>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[#1b1c4f] hover:text-[#EE5D00] transition"
              >
                Services
              </a>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[#1b1c4f] hover:text-[#EE5D00] transition"
              >
                Portfolio
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="border-2 border-[#1b1c4f] text-[#1b1c4f] px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-[#1b1c4f] hover:text-white transition"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full relative flex flex-col items-center justify-center text-center snap-start overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000520] via-[#000B41] to-[#01167e] animate-gradient-x"></div>

        {/* Stars */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute bg-white rounded-full opacity-0 animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight
          bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent uppercase relative z-10"
        >
          Bringing Ideas to <br />
          <span className="text-[#EE5D00]">Life with Design</span> <br />
          Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 md:mt-8 text-gray-200 max-w-md md:max-w-xl text-sm sm:text-base md:text-lg relative z-10"
        >
          We craft impactful brands, user experiences, and custom digital
          solutions tailored to your needs.
        </motion.p>
      </section>

      {/* Recent Works */}
      <section className="min-h-screen bg-white text-[#1b1c4f] relative flex flex-col justify-center items-center snap-start px-4">
        <div className="flex justify-between w-full px-4 sm:px-8 md:px-12 absolute top-16 md:top-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Recent</h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase">Works</h2>
        </div>

        <div
          className="relative flex justify-center items-center w-full h-[500px] sm:h-[600px] overflow-hidden"
          onMouseEnter={stopRotation}
          onMouseLeave={startRotation}
        >
          <div className="relative w-full max-w-[95%] sm:max-w-[600px] h-full flex justify-center items-center">
            {works.map((work, idx) => {
              const isActive = idx === activeIndex;
              const offset = (idx - activeIndex) * 300; // narrower offset for mobile
              return (
                <motion.div
                  key={`${work.id}-${idx}`}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.3,
                    zIndex: isActive ? 20 : 0,
                    x: offset,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute flex justify-center items-center"
                  style={{ display: Math.abs(idx - activeIndex) <= 1 ? "flex" : "none" }}
                >
                  <div
                    className="relative overflow-hidden shadow-2xl rounded-xl sm:rounded-3xl transition-all duration-700 ease-in-out bg-white"
                    style={{
                      width: isActive ? "280px" : "200px",
                      height: isActive ? "400px" : "280px",
                    }}
                  >
                    <Image src={work.image} alt={work.title} fill className="object-cover" />
                    {isActive && (
                      <>
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="absolute top-2 right-4 sm:top-4 sm:right-6 text-base sm:text-xl font-bold"
                        >
                          {work.year}
                        </motion.span>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                          className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 text-left bg-white/90 px-3 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-2xl w-[85%]"
                        >
                          <h3 className="text-lg sm:text-2xl font-bold">{work.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-700 mt-1">{work.subtitle}</p>
                          <div className="flex gap-2 mt-2 sm:mt-3 flex-wrap">
                            {work.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] sm:text-xs bg-[#000B41] text-[#EE5D00] px-2 sm:px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#000B41] text-[#EE5D00] p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#000B41] text-[#EE5D00] p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="min-h-screen w-full relative flex flex-col items-center justify-center text-center snap-start overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000520] via-[#000B41] to-[#01167e] animate-gradient-x"></div>

        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute bg-white rounded-full opacity-0 animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        )}

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white relative z-20">
          LET&apos;S <span className="text-[#EE5D00]">WORK</span> TOGETHER
        </h2>
        <div className="absolute w-full top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-10 hidden sm:block">
          <div className="flex whitespace-nowrap animate-marquee gap-8 sm:gap-12 text-white text-sm sm:text-lg md:text-xl font-semibold opacity-40">
            <span>Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦ Print Design ✦ Merch & Special Projects ✦  Mobile App Developement ✦ </span>
            <span>Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦ Print Design ✦ Merch & Special Projects ✦  Mobile App Developement ✦ </span>
          </div>
        </div>
        <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 my-10 sm:my-16 z-20">
          <Image src="/b1.jpeg" alt="Central Visual" fill className="object-contain" />
        </div>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md md:max-w-xl z-20">
          Start your journey with us today. We’re here to help bring your ideas to life.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-[#000B41] py-12 sm:py-16 px-6 sm:px-12 relative snap-start">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 items-start text-sm sm:text-base">
          {/* Sitemap */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>

          {/* Contact Now */}
          <div className="col-span-2 sm:col-span-1">
            <a
              href="mailto:twocodedmedia@gmail.com"
              className="inline-block bg-white text-[#000B41] px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold shadow-md hover:text-[#EE5D00] transition"
            >
              CONTACT NOW
            </a>
          </div>
        </div>

        {/* Branding */}
        <div className="mt-12 sm:mt-16 text-[#000B41]">
          <p className="text-xs sm:text-sm">© 2024 TwoCoded. All Rights Reserved.</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2">
            TWOCODED
          </h1>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
