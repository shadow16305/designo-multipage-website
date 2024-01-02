import Link from "next/link";

const ContactQuicklink = () => {
  return (
    <div className="bg-[url('../public/images/quicklink-image-mobile.png')] lg:bg-[url('../public/images/quicklink-image.png')] bg-cover lg:max-w-[calc(1240px+32px)] mx-auto flex flex-col justify-center text-center lg:text-start lg:flex-row lg:justify-between items-center py-[72px] px-6 lg:px-24 rounded-3xl">
      <div className="flex flex-col items-center lg:items-start gap-y-4 text-white">
        <h1 className="text-[32px] lg:text-[40px] font-medium leading-[40px] max-w-[280px]">
          Let’s talk about your project
        </h1>
        <p className="leading-[26px] text-base lg:max-w-[460px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link
        href="/contact"
        className="text-dark-grey hover:text-white px-5 py-4 bg-white hover:bg-light-peach transition duration-300 rounded-lg mt-8 lg:mt-0"
      >
        GET IN TOUCH
      </Link>
    </div>
  );
};

export default ContactQuicklink;
