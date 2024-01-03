import { motion } from "framer-motion";

import { fromBottom, fromRight, fromRightTwo } from "@/Tools/variants";
import DesignCards from "../UI/DesignCards";

let cardPositionBottom = {};
let cardPositionRight = {};
let cardPositionRightTwo = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    cardPositionBottom = fromBottom;
    cardPositionRight = fromRight;
    cardPositionRightTwo = fromRightTwo;
  }
}

const HomeCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-[30px] text-white mt-40 px-2 lg:px-0 w-full">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardPositionBottom}
        className="lg:w-1/2"
      >
        <DesignCards
          title="WEB DESIGN"
          link="/web-design"
          className="lg:py-[273px] lg:w-full bg-[url('../public/images/card-img-one.png')]"
        />
      </motion.div>
      <div className="flex flex-col gap-y-6 lg:w-1/2 mt-6 lg:mt-0">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardPositionRight}
        >
          <DesignCards
            title="GRAPHIC DESIGN"
            link="/graphic-design"
            className="py-[108px] w-full bg-[url('../public/images/card-img-three.png')]"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardPositionRightTwo}
        >
          <DesignCards
            title="APP DESIGN"
            link="/app-design"
            className="py-[108px] w-full bg-[url('../public/images/card-img-two.png')]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeCards;
