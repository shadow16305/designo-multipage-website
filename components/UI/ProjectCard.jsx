import Image from "next/image";
import CardWrapper from "./CardWrapper";

const ProjectCard = (props) => {
  return (
    <CardWrapper
      className={`flex flex-col md:flex-row lg:flex-col items-center text-center bg-[#FDF3F0] hover:bg-peach transition duration-300 group cursor-pointer mx-4 md:mx-0 ${props.className}`}
    >
      <Image
        src={props.img}
        alt={props.title}
        width={350}
        height={320}
        className="w-full md:w-1/2 lg:w-full"
      />
      <div className="flex flex-col gap-4 my-8 px-8">
        <h1 className="text-xl text-peach font-medium tracking-[5px] leading-[26px] group-hover:text-white">
          {props.title}
        </h1>
        <p className="text-base text-dark-gray leading-[26px] max-w-[286px] group-hover:text-white">
          {props.description}
        </p>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
