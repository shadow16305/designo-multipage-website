import Image from "next/image";

const AboutLayout = (props) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${props.className} w-full items-center rounded-none md:rounded-3xl`}
    >
      <div className="flex justify-center lg:w-7/12">
        <div className="flex flex-col items-center lg:items-start gap-y-8 py-20 lg:py-0">
          <h1
            className={`text-[32px] lg:text-5xl leading-[48px] font-medium ${props.headerClassName}`}
          >
            {props.title}
          </h1>
          <p
            className={`text-base leading-[26px] text-center lg:text-start max-w-[327px] md:max-w-[573px] lg:max-w-[500px] ${props.paragraphClassName}`}
          >
            {props.paragraph}
          </p>
        </div>
      </div>
      <Image
        src={props.image}
        alt="About Image"
        width={720}
        height={480}
        className="lg:w-5/12 hidden lg:block"
      />
      <Image
        src={props.imageTablet}
        alt="About Image"
        width={720}
        height={480}
        className="hidden md:block lg:hidden"
      />
      <Image
        src={props.imageMobile}
        alt="About Image"
        width={720}
        height={480}
        className="md:hidden"
      />
    </div>
  );
};

export default AboutLayout;
