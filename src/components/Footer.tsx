import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      className="relative h-[500px] sm:h-[600px] lg:h-[700px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+700px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[600px] lg:h-[700px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-700px)]">
          <div
            className="py-16 px-8 h-full w-full flex flex-col justify-between"
            style={{ backgroundColor: "var(--deep-brown)" }}
          >
            <div className="flex justify-center">
              <p className="font-sans text-xs uppercase tracking-[0.4em]" style={{ color: "var(--soft-purple)" }}>
                А &amp; П · 19.09.2026
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p
                className="font-sans font-light text-base md:text-lg mb-4 leading-relaxed"
                style={{ color: "var(--beige)" }}
              >
                Будем с нетерпением ждать встречи с вами
                <br />в наш особенный день ❤️
              </p>
              <div className="w-12 h-px mx-auto my-8" style={{ backgroundColor: "var(--soft-purple)" }} />
            </motion.div>

            <div className="flex flex-col items-center gap-6">
              <h1
                className="font-serif text-[18vw] leading-[0.85] text-center tracking-tight"
                style={{ color: "var(--cream)" }}
              >
                Алина
                <br />
                <span className="italic" style={{ color: "var(--soft-purple)" }}>&</span>
                <br />
                Павел
              </h1>
              <p className="font-sans text-xs tracking-widest" style={{ color: "var(--soft-purple)" }}>
                2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
