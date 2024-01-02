import Image from "next/image";
import Link from "next/link";

const LocationQuickLinkLayout = (props) => {
  return (
    <div className="flex flex-col items-center text-dark-grey">
      <Image src={props.img} alt="Graphic" width={202} height={202} />
      <h1 className="mt-12 text-xl font-medium leading-[26px] tracking-[5px]">
        {props.title}
      </h1>
      <Link
        href="/locations"
        className="text-[15px] text-center font-medium tracking-[1px] text-white bg-peach hover:bg-light-peach transition duration-300 rounded-lg w-[152px] py-4 mt-10"
      >
        SEE LOCATION
      </Link>
    </div>
  );
};

export default LocationQuickLinkLayout;
