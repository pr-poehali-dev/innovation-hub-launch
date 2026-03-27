import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f7e13df0-e75f-4ae0-86c7-1af4e5378b05/files/ae018115-d330-4b1b-9eef-5e7f48232957.jpg"
          alt="Байкал — великое озеро"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          БАЙКАЛ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Экскурсии по самому глубокому озеру мира. Незабываемые маршруты, живая природа и магия Сибири.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-white text-black px-8 py-3 uppercase text-sm tracking-wide hover:bg-neutral-200 transition-colors duration-300"
        >
          Выбрать экскурсию
        </a>
      </div>
    </div>
  );
}