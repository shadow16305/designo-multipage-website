import { motion } from "framer-motion";
import { fromBottom } from "../../Tools/variants";

import CardWrapper from "../UI/CardWrapper";

const HeroHome = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={fromBottom}
    >
      <CardWrapper className="bg-[url('../public/images/hero-home-bg-mobile.png')] md:bg-[url('../public/images/hero-home-bg-tablet.png')] lg:bg-[url('../public/images/hero-home-bg.png')] bg-cover 2xl:bg-center bg-no-repeat py-[145px] mt-24 md:mt-[155px] lg:mt-[192px] w-full rounded-none md:rounded-3xl min-h-[843px] lg:min-h-0 relative">
        <div className="flex flex-col items-center lg:items-start text-white lg:ps-24">
          <h1 className="text-[32px] md:text-5lg text-center lg:text-start font-medium leading-[1.2] md:max-w-[573px] lg:max-w-[490px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-base text-center lg:text-start leading-[26px] max-w-[327px] md:max-w-[445px] mt-3">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="text-[15px] text-center font-medium tracking-[1px] text-dark-grey bg-white hover:text-white hover:bg-light-peach transition duration-300 rounded-lg w-[152px] py-4 mt-10">
            LEARN MORE
          </button>
        </div>
      </CardWrapper>
    </motion.div>
  );
};

export default HeroHome;
