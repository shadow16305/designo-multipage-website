import { motion } from "framer-motion";

import CardWrapper from "./CardWrapper";
import { fromBottom } from "@/Tools/variants";

const BannerWrapper = (props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={fromBottom}
    >
      <CardWrapper className="bg-[url('../public/images/banner-image-mobile.png')] lg:bg-[url('../public/images/quicklink-image.png')] bg-cover mt-24 md:mt-[155px] lg:mt-[192px] w-full rounded-none md:rounded-3xl flex flex-col items-center justify-center text-white text-center py-16">
        <h1 className="text-5xl font-medium leading-[48px]">
          {props.bannerTitle}
        </h1>
        <p className="text-base leading-[26px] md:max-w-[388px] mt-6">
          {props.bannerDescription}
        </p>
      </CardWrapper>
    </motion.div>
  );
};

export default BannerWrapper;
