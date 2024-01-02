import Link from "next/link";
import CardWrapper from "./CardWrapper";
import { IoMdArrowDropright } from "react-icons/io";

const DesignCards = (props) => {
  return (
    <Link href={props.link}>
      <CardWrapper
        className={`bg-cover bg-no-repeat flex flex-col items-center justify-center py-24 group relative text-white ${props.className}`}
      >
        <div className="absolute w-full h-full group-hover:bg-peach group-hover:bg-opacity-30 transition duration-300 rounded-3xl z-0"></div>
        <h1 className="text-[40px] relative z-10">{props.title}</h1>
        <span className="relative z-10 flex items-center gap-x-5">
          VIEW PROJECTS
          <IoMdArrowDropright className="text-peach text-2xl" />
        </span>
      </CardWrapper>
    </Link>
  );
};

export default DesignCards;
