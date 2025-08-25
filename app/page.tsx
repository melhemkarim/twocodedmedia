"use client";

import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const works = [
  {
    id: 1,
    title: "Kinder Chocolate",
    subtitle: "Packaging Design",
    year: "2023",
    tags: ["Packaging", "Graphic Design"],
    images: ["/kinder1.jpeg", "/kinder2.jpeg"],
    details:
      "Packaging design for Kinder Chocolate, focusing on vibrant colors and playful elements to attract children.",
  },
  {
    id: 2,
    title: "Tarbush",
    subtitle: "Packaging Design",
    year: "2024",
    tags: ["Packaging", "Graphic Design"],
    images: ["/ras1.jpeg", "/ras2.jpeg", "/ras3.jpeg"],
    details:
      "Packaging design for Tarbush, incorporating traditional motifs with a modern twist to appeal to a broad audience.",
  },
  {
    id: 3,
    title: "Danah Jewlery",
    subtitle: "Jewelry Design",
    year: "2024",
    tags: ["Jewelery", "Design", "Packaging"],
    images: ["/danah1.jpeg", "/danah2.jpeg"],
    details:
      "Jewelry design for Danah Jewlery, emphasizing elegance and craftsmanship in each piece.",
  },
  {
    id: 4,
    title: "Dominos Pizza",
    subtitle: "Packaging Design",
    year: "2024",
    tags: ["Packaging", "Graphic Design"],
    images: ["/dominos.jpeg", "/dominos2.jpeg"],
    details:
      "Packaging design for Dominos Pizza, focusing on bold colors and clear branding to enhance customer experience.",
  },
  {
    id: 5,
    title: "Royal Chocolate",
    subtitle: "Packaging Design",
    year: "2024",
    tags: ["Packaging", "Graphic Design"],
    images: ["/choco1.jpeg", "/choco2.jpeg"],
    details:
      "Packaging design for Royal Chocolate, using luxurious colors and textures to convey premium quality.",
  },
  {
    id: 6,
    title: "Arkan",
    subtitle: "Brand Identity",
    year: "2024",
    tags: ["Branding", "Graphic Design"],
    images: ["/arkan1.jpeg", "/arkan2.jpeg"],
    details:
      "Brand identity design for Arkan, creating a cohesive visual language that reflects the brand's values and mission.",
  },
  {
    id: 7,
    title: "Kindness + Billboards",
    subtitle: "Graphic Design",
    year: "2024",
    tags: ["Billboards", "Graphic Design", "Creative"],
    images: [
      "/kind1.jpeg",
      "/kind5.jpeg",
      "/kind6.jpeg",
      "/kind2.jpeg",
      "/kind3.jpeg",
      "/kind4.jpeg",
    ],
    details:
      "Graphic design for Kindness billboards, focusing on impactful visuals and messaging to promote kindness in the community.",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleAccordion = (id: number) => {
    setActive(active === id ? null : id);
  };

  // Scroll progress bar
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="h-screen w-full overflow-y-scroll scroll-smooth relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#EE5D00] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 w-[92%] max-w-6xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-[#ffffff] backdrop-blur-lg rounded-2xl shadow-lg mx-auto left-1/2 -translate-x-1/2 z-50 font-poppins"
      >
        {/* Links (hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-[#1b1c4f] text-sm font-medium tracking-wide">
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">
            About
          </a>
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">
            Services
          </a>
          <a className="hover:text-[#EE5D00] transition-colors duration-300" href="#">
            Portfolio
          </a>
        </div>

        {/* Logo */}
        <div className="relative w-24 h-8 md:w-32 md:h-10">
          <Image
            src="/logo1.png"
            alt="Twocoded Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Contact Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="border-2 border-[#1b1c4f] text-[#1b1c4f] text-xs md:text-sm px-4 md:px-5 py-1.5 md:py-2 rounded-xl font-semibold shadow-sm hover:bg-[#1b1c4f] hover:text-white transition duration-300">
            Contact
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="h-screen w-full relative flex flex-col items-center justify-center text-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000520] via-[#000B41] to-[#01167e] animate-gradient-x"></div>

        <div className="absolute bottom-0 left-0 w-52 md:w-80 opacity-10 z-0">
          <Image
            src="/logo2.png"
            alt="Background Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
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
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight
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
          className="mt-6 sm:mt-8 text-gray-200 max-w-md md:max-w-xl text-sm sm:text-base md:text-lg relative z-10"
        >
          We craft impactful brands, user experiences, and custom digital
          solutions tailored to your needs.
        </motion.p>
      </section>

      {/* Recent Works Accordion Section */}
      <section className="min-h-screen bg-white text-[#1b1c4f] relative flex flex-col justify-center items-center px-4 sm:px-6 py-16 md:py-20">
        <div className="absolute bottom-0 right-0 w-52 md:w-80 opacity-30 z-0 pointer-events-none">
          <Image
            src="/logo2.png"
            alt="Background Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-8 md:mb-12"
        >
          Our <span className="text-[#EE5D00]">Work</span>
        </motion.h2>

        <div className="w-full max-w-4xl space-y-4">
          {works.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="border border-gray-300 rounded-2xl overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(work.id)}
                className="w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-4 text-base md:text-lg font-semibold hover:bg-gray-100 transition"
              >
                <span className="text-left">
                  <span className="text-gray-400 mr-2">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {work.title} –{" "}
                  <span className="text-gray-500">{work.subtitle}</span>
                </span>
                <span className="text-[#EE5D00] font-bold text-xl">
                  {active === work.id ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === work.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 md:px-6 pb-6 bg-gray-50"
                  >
                    <p className="text-gray-700 mb-4 text-sm md:text-base">
                      {work.details}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#000B41] text-[#EE5D00] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {work.images.map((img, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.03 }}
      className="relative w-full rounded-xl overflow-hidden border border-gray-200"
    >
      <Image
        src={img}
        alt={work.title}
        width={800}   // ✅ let Next.js optimize properly
        height={600}  // aspect ratio handled automatically
        className="w-full h-auto object-contain"
      />
    </motion.div>
  ))}
</div>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="h-screen w-full relative flex flex-col items-center justify-center text-center snap-start overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000520] via-[#000B41] to-[#01167e] animate-gradient-x"></div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white relative z-20"
        >
          LET&apos;S <span className="text-[#EE5D00]">WORK</span> TOGETHER
        </motion.h2>

        <div className="absolute w-full top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-10">
          <div className="flex whitespace-nowrap animate-marquee gap-8 md:gap-12 text-xs sm:text-base md:text-xl font-semibold text-white opacity-40">
            <span>
              Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦
              Print Design ✦ Merch & Special Projects ✦ Mobile App Developement ✦
            </span>
            <span>
              Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦
              Print Design ✦ Merch & Special Projects ✦ Mobile App Developement ✦
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 my-12 sm:my-16 z-20"
        >
          <Image
            src="/b1.jpeg"
            alt="Central Visual"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-sm sm:text-base md:text-xl max-w-md md:max-w-xl z-20"
        >
          Start your journey with us today. We’re here to help bring your ideas to life.
        </motion.p>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#ffffff] text-[#000B41] py-12 sm:py-16 px-6 md:px-12 relative snap-start"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start text-sm">
          <div>
            <h4 className="font-bold mb-2 md:mb-4">Sitemap</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 md:mb-4">Legal</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 md:mb-4">Social</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 flex md:block justify-center md:justify-start">
            <a
              href="mailto:twocodedmedia@gmail.com"
              className="inline-block bg-[#ffffff] text-[#000B41] text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold shadow-md hover:bg-white hover:text-[#EE5D00] transition"
            >
              CONTACT NOW
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 text-[#000B41] text-center md:text-left">
          <p className="text-xs md:text-sm">© 2024 TwoCoded. All Rights Reserved.</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold">TWOCODED</h1>
        </div>
      </motion.footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
