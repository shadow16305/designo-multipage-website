import { motion } from "framer-motion";

import FeaturesLayout from "./FeaturesLayout";
import { opacityVariants } from "@/Tools/variants";

let opacity = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    opacity = opacityVariants;
  }
}

const features = [
  {
    id: "f1",
    imgSrc: "/images/feature-image-one.png",
    title: "PASSIONATE",
    paragraph:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: "f2",
    imgSrc: "/images/feature-image-two.png",
    title: "RESOURCEFUL",
    paragraph:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: "f3",
    imgSrc: "/images/feature-image-three.png",
    title: "FRIENDLY",
    paragraph:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const HomeFeatures = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={opacity}
      className="flex flex-col lg:flex-row gap-8 mt-40 items-center
      justify-center text-center"
    >
      {features.map((item) => (
        <FeaturesLayout
          key={item.id}
          img={item.imgSrc}
          title={item.title}
          paragraph={item.paragraph}
        />
      ))}
    </motion.div>
  );
};

export default HomeFeatures;
