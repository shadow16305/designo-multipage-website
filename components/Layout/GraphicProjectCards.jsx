import { motion } from "framer-motion";

import { fromBottomStagger } from "@/Tools/variants";

import ProjectCard from "../UI/ProjectCard";

const graphicCards = [
  {
    id: "g1",
    title: "THE BROWN",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    imageSrc: "/images/the-brown.png",
    duration: 0.4,
  },
  {
    id: "g2",
    title: "BOXED WATER",
    description: "A simple packaging concept made for Boxed Water",
    imageSrc: "/images/boxed water.png",
    duration: 0.6,
  },
  {
    id: "g3",
    title: "SCIENCE!",
    description: "A poster made in collaboration with the Federal Art Project",
    imageSrc: "/images/science.png",
    duration: 0.8,
  },
];

const GraphicProjectCards = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 mt-40">
      {graphicCards.map((card) => (
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

export default GraphicProjectCards;
