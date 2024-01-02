import { motion } from "framer-motion";

import WebProjectCards from "@/components/Layout/WebProjectCards";
import BannerWrapper from "../components/UI/BannerWrapper";
import DesignCards from "@/components/UI/DesignCards";
import { fromBottom, fromBottomTwo } from "@/Tools/variants";

const webDesign = () => {
  return (
    <>
      <BannerWrapper
        bannerTitle="Web Design"
        bannerDescription="We build websites that serve as powerful marketing tools 
  and bring memorable brand experiences."
      />
      <WebProjectCards />
      <div className="flex flex-col lg:flex-row gap-[30px] lg:w-full mt-40 mx-4 md:mx-0">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
          className="lg:w-1/2"
        >
          <DesignCards
            title="APP DESIGN"
            link="/app-design"
            className="py-[108px] lg:w-full bg-[url('../public/images/card-img-two.png')]"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottomTwo}
          className="lg:w-1/2"
        >
          <DesignCards
            title="GRAPHIC DESIGN"
            link="/graphic-design"
            className="py-[108px] lg:w-full bg-[url('../public/images/card-img-three.png')]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default webDesign;
