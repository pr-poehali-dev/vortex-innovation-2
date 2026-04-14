import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Featured() {
  return (
    <div id="invitation" className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* Invitation block */}
      <section className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 lg:h-screen sticky top-0 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/files/46ea65af-9533-486a-af33-6b5454268de8.jpg"
            alt="Алина и Павел"
            className="w-full h-full object-cover"
            style={{ minHeight: "50vw" }}
          />
          <div className="absolute inset-0 bg-[#5C3D2E]/10" />
        </div>

        <div
          className="flex-1 flex flex-col justify-center px-8 py-16 lg:px-16"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-lg"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="font-sans text-xs uppercase tracking-[0.35em] mb-6"
              style={{ color: "var(--purple)" }}
            >
              Приглашение
            </motion.p>
            <motion.div custom={1} variants={fadeUp}>
              <div className="floral-divider mb-8 justify-start">
                <span className="font-serif text-lg" style={{ color: "var(--purple)" }}>✦</span>
              </div>
            </motion.div>
            <motion.h2
              custom={2}
              variants={fadeUp}
              className="font-serif text-3xl lg:text-4xl leading-snug mb-8"
              style={{ color: "var(--deep-brown)" }}
            >
              Дорогие родные и друзья!
            </motion.h2>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="font-sans font-light text-base leading-relaxed mb-6"
              style={{ color: "var(--warm-brown)" }}
            >
              Мы рады пригласить вас на нашу свадьбу и будем счастливы провести этот день вместе с вами.
            </motion.p>
            <motion.p
              custom={4}
              variants={fadeUp}
              className="font-sans font-light text-base leading-relaxed"
              style={{ color: "var(--warm-brown)" }}
            >
              Этот день станет началом нашей семейной истории, и нам очень важно, чтобы рядом были самые близкие люди.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Date & Place */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: "var(--light-purple)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-sans text-xs uppercase tracking-[0.35em] mb-8"
            style={{ color: "var(--purple)" }}
          >
            Дата и место
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-serif text-5xl lg:text-7xl mb-4"
            style={{ color: "var(--deep-brown)" }}
          >
            19.09.2026
          </motion.h2>
          <motion.div custom={2} variants={fadeUp}>
            <p className="font-sans font-light text-sm uppercase tracking-widest mb-2" style={{ color: "var(--purple)" }}>
              Суббота
            </p>
            <div className="w-12 h-px mx-auto my-8" style={{ backgroundColor: "var(--soft-purple)" }} />
            <p className="font-serif text-2xl lg:text-3xl mb-3" style={{ color: "var(--deep-brown)" }}>
              Банкетный зал «Камелия»
            </p>
            <p className="font-sans font-light text-sm" style={{ color: "var(--warm-brown)" }}>
              г. Тамбов, ул. Чкалова, 10А
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Program */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--cream)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-sans text-xs uppercase tracking-[0.35em] mb-12 text-center"
            style={{ color: "var(--purple)" }}
          >
            Программа дня
          </motion.p>
          {[
            { time: "14:00", label: "Сбор гостей" },
            { time: "15:00", label: "Выездная регистрация" },
            { time: "16:00", label: "Начало банкета" },
            { time: "22:00", label: "Завершение вечера" },
          ].map((item, i) => (
            <motion.div
              key={item.time}
              custom={i + 1}
              variants={fadeUp}
              className="flex items-center gap-6 py-5 border-b last:border-b-0"
              style={{ borderColor: "var(--beige)" }}
            >
              <span
                className="font-serif text-2xl w-16 shrink-0"
                style={{ color: "var(--purple)" }}
              >
                {item.time}
              </span>
              <span className="font-sans font-light text-base" style={{ color: "var(--deep-brown)" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Dress code */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "var(--beige)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-sans text-xs uppercase tracking-[0.35em] mb-8"
            style={{ color: "var(--purple)" }}
          >
            Дресс-код
          </motion.p>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="font-sans font-light text-base leading-relaxed mb-10"
            style={{ color: "var(--warm-brown)" }}
          >
            Мы будем благодарны, если вы поддержите атмосферу праздника и выберете наряды в нежных оттенках:
          </motion.p>
          <motion.div custom={2} variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Бежевый", color: "#e8ddd0" },
              { label: "Кремовый", color: "#f7f3ee" },
              { label: "Коричневый", color: "#8B6F5E" },
              { label: "Пурпурный", color: "#8B7BA8" },
            ].map((swatch) => (
              <div key={swatch.label} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full border"
                  style={{ backgroundColor: swatch.color, borderColor: "var(--soft-purple)" }}
                />
                <span className="font-sans text-xs uppercase tracking-wider" style={{ color: "var(--warm-brown)" }}>
                  {swatch.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
