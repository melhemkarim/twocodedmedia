"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Send to FormSubmit
    await fetch("https://formsubmit.co/twocodedmedia@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    form.reset();
  };
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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000520] via-[#000B41] to-[#01167e] animate-gradient-x"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white relative z-20"
      >
        LET&apos;S <span className="text-[#EE5D00]">WORK</span> TOGETHER
      </motion.h2>

      {/* Scrolling Marquee */}
      <div className="absolute w-full top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-10">
        <div className="flex whitespace-nowrap animate-marquee gap-8 md:gap-12 text-xs sm:text-base md:text-xl font-semibold text-white opacity-40">
          <span>
            Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦
            Print Design ✦ Merch & Special Projects ✦ Mobile App Development ✦
          </span>
          <span>
            Branding & Identity ✦ Digital & Social Media ✦ Web Design & Development ✦
            Print Design ✦ Merch & Special Projects ✦ Mobile App Development ✦
          </span>
        </div>
      </div>

      {/* Contact Form or Success Message */}
      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4 my-12"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE5D00]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE5D00]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE5D00]"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-6 bg-[#EE5D00] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff762a] transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      ) : (
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative z-20 flex flex-col items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 sm:p-8 my-12 max-w-md mx-auto text-center"
>
  <div className="text-[#EE5D00] text-4xl sm:text-5xl">✅</div>
  <h3 className="text-white text-2xl sm:text-3xl font-bold">
    Message Sent!
  </h3>
  <p className="text-gray-200 text-sm sm:text-base">
    We received your email and will get back to you shortly. Thank you for reaching out!
  </p>
</motion.div>
      )}

      {/* Description */}
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
        
      {/* Top Nav */}
      <div className="flex justify-center gap-6 mb-12">
        {["Home", "Work", "Services", "About"].map((item) => (
          <Link
            key={item}
            href="#"
            className="px-6 py-2 border border-black rounded-full font-bold tracking-wide hover:bg-[#000B41] hover:text-white transition"
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left - Company Info */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold mb-6">ABOUT</h2>
          <p>At Twocoded, we specialize in branding, graphic design, and packaging, creating visuals that make a lasting impression. We also design and develop websites and mobile apps, blending creativity with functionality to deliver seamless digital experiences. Every project is crafted to reflect your brand’s identity and connect with your audience, turning ideas into impactful, memorable solutions.</p>
        </div>

        {/* Center - TALK TO US */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex gap-4 text-sm mb-2">
          
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            TWOCODED
          </h1>
        </div>

        {/* Right - Socials + Button */}
        <div className="flex flex-col items-end gap-6">
          <div className="flex flex-col text-right space-y-2 font-bold">
            {["Instagram", "Facebook", "LinkedIn", "Dribbble", "Behance"].map(
              (social) => (
                <Link key={social} href="#" className="hover:underline">
                  {social.toUpperCase()}
                </Link>
              )
            )}
          </div>
          <button className="bg-[#EE5D00] text-white font-bold px-6 py-4 rounded-none text-lg shadow-md hover:bg-[#ff7723] transition">
            CONTACT US
          </button>
        </div>
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
