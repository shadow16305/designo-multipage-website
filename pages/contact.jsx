import { motion } from "framer-motion";
import { opacityVariants } from "@/Tools/variants";
import LocationQuickLinkLayout from "@/components/Layout/LocationQuickLinkLayout";

import ContactLayout from "@/components/Layout/ContactLayout";

let opacity = {};

if (typeof window !== "undefined") {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
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

const contact = () => {
  return (
    <>
      <ContactLayout />
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
    </>
  );
};

export default contact;
