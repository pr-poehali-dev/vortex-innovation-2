import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToInvitation = () => {
    const el = document.getElementById("invitation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/4c003033-fb1f-432b-956e-a41d96b4e404/files/43951e1d-52d4-44e3-b9a6-a56242e22b85.jpg"
          alt="Floral arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f7f3ee]/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 flex flex-col items-center"
      >
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#8B7BA8] mb-8">
          19 сентября 2026
        </p>
        <h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6"
          style={{ color: "var(--deep-brown)" }}
        >
          Алина
          <br />
          <span className="italic font-light" style={{ color: "var(--purple)" }}>
            &
          </span>
          <br />
          Павел
        </h1>

        <p
          className="font-sans font-light text-sm md:text-base max-w-md mx-auto mt-6 leading-relaxed"
          style={{ color: "var(--warm-brown)" }}
        >
          Мы будем счастливы разделить с вами один из самых важных дней нашей жизни
        </p>

        <motion.button
          onClick={scrollToInvitation}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-8 py-3 text-xs uppercase tracking-[0.3em] font-sans transition-all duration-300 border"
          style={{
            borderColor: "var(--purple)",
            color: "var(--purple)",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--purple)";
            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--purple)";
          }}
        >
          Открыть приглашение
        </motion.button>
      </motion.div>
    </div>
  );
}
