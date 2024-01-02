import { motion } from "framer-motion";

import { fromBottom, fromBottomTwo } from "@/Tools/variants";
import GraphicProjectCards from "@/components/Layout/GraphicProjectCards";
import BannerWrapper from "@/components/UI/BannerWrapper";
import DesignCards from "@/components/UI/DesignCards";

const graphicDesign = () => {
  return (
    <>
      <BannerWrapper
        bannerTitle="Graphic Design"
        bannerDescription="We deliver eye-catching branding materials that are 
        tailored to meet your business objectives.
        "
      />
      <GraphicProjectCards />
      <div className="flex flex-col lg:flex-row gap-[30px] lg:w-full mt-40 mx-4 md:mx-0">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fromBottom}
          className="lg:w-1/2"
        >
          <DesignCards
            title="WEB DESIGN"
            link="/web-design"
            className="py-[108px] lg:w-full bg-[url('../public/images/card-img-one.png')]"
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
            title="APP DESIGN"
            link="/app-design"
            className="py-[108px] lg:w-full bg-[url('../public/images/card-img-two.png')]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default graphicDesign;
