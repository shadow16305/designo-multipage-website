import { motion } from "framer-motion";

import { fromBottom, opacityVariants } from "@/Tools/variants";
import AboutLayout from "@/components/Layout/AboutLayout";
import LocationQuickLinkLayout from "@/components/Layout/LocationQuickLinkLayout";

let cardPositionBottom = {};
let opacity = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    cardPositionBottom = fromBottom;
    opacity = opacityVariants;
  }
}

const quicklinks = [
  {
    id: "q1",
    title: "CANADA",
    img: "/images/canada-quicklink.svg",
  },
  {
    id: "q2",
    title: "AUSTRALIA",
    img: "/images/australia-quicklink.svg",
  },
  {
    id: "q3",
    title: "UNITED KINGDOM",
    img: "/images/uk-quicklink.svg",
  },
];

const company = () => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardPositionBottom}
      >
        <AboutLayout
          title="About Us"
          paragraph="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
          image="/images/about-img-one.png"
          imageTablet="/images/about-img-one-tablet.png"
          imageMobile="/images/about-img-one-mobile.png"
          className="mt-24 md:mt-40 bg-peach text-white"
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardPositionBottom}
      >
        <AboutLayout
          title="World-class talent"
          paragraph="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          image="/images/about-img-two.png"
          imageTablet="/images/about-img-two-tablet.png"
          imageMobile="/images/about-img-two-mobile.png"
          className="md:mt-40 bg-[#FDF3F0] lg:flex-row-reverse"
          headerClassName="text-peach"
          paragraphClassName="text-black"
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={opacity}
        className="flex flex-col lg:flex-row lg:justify-between items-center mt-40 lg:w-11/12 lg:mx-auto gap-y-8 lg:gap-y-0"
      >
        {quicklinks.map((item) => (
          <LocationQuickLinkLayout
            key={item.id}
            img={item.img}
            title={item.title}
          />
        ))}
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardPositionBottom}
      >
        <AboutLayout
          title="The real deal"
          paragraph="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
          image="/images/about-img-three.png"
          imageTablet="/images/about-img-three-tablet.png"
          imageMobile="/images/about-img-three-mobile.png"
          className="mt-40 bg-[#FDF3F0]"
          headerClassName="text-peach"
          paragraphClassName="text-black"
        />
      </motion.div>
    </>
  );
};

export default company;
