import { motion } from "framer-motion";
import { fromBottom } from "@/Tools/variants";

import Image from "next/image";
import CardWrapper from "../UI/CardWrapper";

const LocationLayout = (props) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row gap-x-8 w-full ${props.className}`}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fromBottom}
        className="lg:w-[66%] md:mt-8 lg:mt-0"
      >
        <CardWrapper className="bg-[#FDF3F0] flex flex-col justify-center w-full h-full gap-y-6 py-20 lg:ps-[100px]">
          <h1 className="text-peach text-5xl leading-[48px] text-center lg:text-start">
            {props.country}
          </h1>
          <div className="flex flex-col lg:flex-row items-center text-dark-grey gap-x-28">
            <div className="flex flex-col items-center lg:items-start text-base leading-[26px]">
              <h2 className="font-bold">{props.office}</h2>
              <p>{props.street}</p>
              <p>{props.city}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-base leading-[26px] mt-8 lg:mt-0">
              <h2 className="font-bold">Contact</h2>
              <p>{props.number}</p>
              <p>{props.email}</p>
            </div>
          </div>
        </CardWrapper>
      </motion.div>
      <Image
        src={props.img}
        alt="Map"
        width={350}
        height={320}
        className="w-full lg:w-[34%]"
      />
    </div>
  );
};

export default LocationLayout;
