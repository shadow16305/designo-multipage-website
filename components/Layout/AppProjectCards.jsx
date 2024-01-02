import { motion } from "framer-motion";

import { fromBottomStagger } from "@/Tools/variants";

import ProjectCard from "../UI/ProjectCard";

const appCards = [
  {
    id: "a1",
    title: "AIRFILTER",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    imageSrc: "/images/airfilter.png",
    duration: 0.4,
  },
  {
    id: "a2",
    title: "EYECAM",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    imageSrc: "/images/eyecam.png",
    duration: 0.6,
  },
  {
    id: "a3",
    title: "FACEIT",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    imageSrc: "/images/faceit.png",
    duration: 0.8,
  },
  {
    id: "a4",
    title: "TODO",
    description: "A todo app that features cloud sync with light and dark mode",
    imageSrc: "/images/todo.png",
    duration: 0.4,
  },
  {
    id: "a5",
    title: "LOOPSTUDIOS",
    description: "A VR experience app made for Loopstudios",
    imageSrc: "/images/loopstudios.png",
    duration: 0.6,
  },
];

const AppProjectCards = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 mt-40">
      {appCards.map((card) => (
        <motion.div
          key={card.id}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottomStagger(card)}
          className="lg:w-[30%]"
        >
          <ProjectCard
            title={card.title}
            description={card.description}
            img={card.imageSrc}
            className="lg:w-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AppProjectCards;
