import { motion } from "framer-motion";

import CardWrapper from "../UI/CardWrapper";
import Form from "./Form";
import { fromBottom } from "@/Tools/variants";

let cardPositionBottom = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    cardPositionBottom = fromBottom;
  }
}

const ContactLayout = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardPositionBottom}
      className="mt-24 lg:mt-40"
    >
      <CardWrapper className="flex flex-col lg:flex-row lg:justify-between gap-y-20 lg:gap-y-0 bg-peach px-24 py-32">
        <div className="flex flex-col justify-center items-center lg:items-start text-white gap-y-8">
          <h1 className="text-[32px] lg:text-5xl font-medium leading-[48px]">
            Contact Us
          </h1>
          <p className="text-base leading-[26px] max-w-[279px] lg:max-w-[445px] text-center lg:text-start">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <Form />
      </CardWrapper>
    </motion.div>
  );
};

export default ContactLayout;
