import Image from "next/image";
import Link from "next/link";
import ContactQuicklink from "../../UI/ContactQuicklink";

const navlinks = [
  {
    id: "n1",
    path: "/company",
    text: "our company",
  },
  {
    id: "n2",
    path: "/locations",
    text: "locations",
  },
  {
    id: "n3",
    path: "/contact",
    text: "contact",
  },
];

const Footer = () => {
  return (
    <div className="relative mt-[380px] bg-[#1D1C1E]">
      <div className="absolute -top-1/2 lg:-translate-y-[10%] left-1/2 -translate-x-1/2 w-11/12 lg:w-10/12">
        <ContactQuicklink />
      </div>
      <div className=" flex flex-col pt-36 pb-10 lg:max-w-[calc(1240px+32px)] mx-auto lg:px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <Image
            src="/images/logo-light.svg"
            width={203}
            height={32}
            alt="logo"
          />
          <hr className="md:mx-10 bg-white mt-10 lg:hidden" />
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-y-0 lg:gap-x-[42px]">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-sm tracking-[2px] text-white uppercase font-normal group relative"
              >
                <span>{link.text}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 rounded-md bg-[#FFAD9B] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
        <hr className="bg-white mt-10 hidden lg:block" />
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between text-white mt-8">
          <div className="flex flex-col text-center lg:text-start opacity-50">
            <p className="font-bold">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="flex flex-col text-center lg:text-start mt-10 lg:mt-0 opacity-50">
            <p className="font-bold">Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="flex gap-x-4 mt-10 lg:mt-0">
            <Image
              src="/images/facebook.svg"
              width={24}
              height={24}
              alt="social icon"
            />
            <Image
              src="/images/youtube.svg"
              width={24}
              height={24}
              alt="social icon"
            />
            <Image
              src="/images/twitter.svg"
              width={24}
              height={24}
              alt="social icon"
            />
            <Image
              src="/images/pinterest.svg"
              width={24}
              height={24}
              alt="social icon"
            />
            <Image
              src="/images/instagram.svg"
              width={24}
              height={24}
              alt="social icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
