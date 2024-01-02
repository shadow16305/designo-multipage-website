import Image from "next/image";

const FeaturesLayout = (props) => {
  return (
    <div className="flex flex-col items-center text-dark-grey">
      <Image src={props.img} alt="Graphic" width={202} height={202} />
      <h1 className="mt-12 text-xl font-medium leading-[26px] tracking-[5px]">
        {props.title}
      </h1>
      <p className="mt-8 text-base leading-[26px] max-w-[327px] lg:max-w-none">
        {props.paragraph}
      </p>
    </div>
  );
};

export default FeaturesLayout;
