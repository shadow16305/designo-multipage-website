import { motion } from "framer-motion";

import BannerWrapper from "@/components/UI/BannerWrapper";
import AppProjectCards from "@/components/Layout/AppProjectCards";
import DesignCards from "@/components/UI/DesignCards";
import { fromBottom, fromBottomTwo } from "@/Tools/variants";

const appDesign = () => {
  return (
    <>
      <BannerWrapper
        bannerTitle="App Design"
        bannerDescription="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <AppProjectCards />
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
            title="GRAPHIC DESIGN"
            link="/graphic-design"
            className="py-[108px] lg:w-full bg-[url('../public/images/card-img-three.png')]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default appDesign;
