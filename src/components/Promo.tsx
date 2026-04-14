import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      {/* Important info section */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--light-purple)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-sans text-xs uppercase tracking-[0.35em] mb-12 text-center"
            style={{ color: "var(--purple)" }}
          >
            Важная информация
          </motion.p>

          {[
            {
              icon: "🌸",
              text: "Мы очень любим детей, но в этот день просим вас прийти без малышей, чтобы все могли полностью насладиться праздником.",
            },
            {
              icon: "🎁",
              text: "Пожеланий по подаркам нет — для нас главное ваше присутствие и хорошее настроение.",
            },
            {
              icon: "💌",
              text: "Если вы планируете прийти со своей второй половинкой, пожалуйста, заранее сообщите нам об этом.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeUp}
              className="flex gap-5 py-6 border-b last:border-b-0"
              style={{ borderColor: "var(--soft-purple)" }}
            >
              <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
              <p
                className="font-sans font-light text-base leading-relaxed"
                style={{ color: "var(--warm-brown)" }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Parallax photo section */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-[70vh] overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/files/0fa6ff62-29b2-43b2-b5e2-a204a881d09a.jpg"
              alt="Алина и Павел"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-[#5C3D2E]/30" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p
            className="font-serif italic text-2xl md:text-4xl lg:text-5xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#f7f3ee" }}
          >
            «Любовь — это не то, что вы находите. Это то, что находит вас.»
          </p>
        </motion.div>
      </div>
    </>
  );
}
