import { motion } from "framer-motion";
import { fromBottomStagger } from "@/Tools/variants";

import ProjectCard from "../UI/ProjectCard";

const webCards = [
  {
    id: "w1",
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses",
    imageSrc: "/images/express.png",
    duration: 0.4,
  },
  {
    id: "w2",
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    imageSrc: "/images/transfer.png",
    duration: 0.6,
  },
  {
    id: "w3",
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    imageSrc: "/images/photon.png",
    duration: 0.8,
  },
  {
    id: "w4",
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
    imageSrc: "/images/builder.png",
    duration: 0.4,
  },
  {
    id: "w5",
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
    imageSrc: "/images/blogr.png",
    duration: 0.6,
  },
  {
    id: "w6",
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    imageSrc: "/images/camp.png",
    duration: 0.8,
  },
];

const WebProjectCards = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 mt-40">
      {webCards.map((card) => (
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

export default WebProjectCards;
