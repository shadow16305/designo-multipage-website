import Link from "next/link";
import { motion } from "framer-motion";

const DropdownMobile = (props) => {
  return (
    <motion.div
      initial={{
        height: 0,
        overflow: "hidden",
      }}
      animate={{
        height: "289px",
        overflow: "visible",
      }}
      exit={{
        height: 0,
        overflow: "hidden",
      }}
      transition={{ duration: 0.6 }}
      className="absolute w-full top-0 left-0 bg-[#1D1C1E] py-6 z-20 flex items-end md:hidden"
    >
      <div className="uppercase flex flex-col gap-5 ps-6">
        {props.navlinks.map((link) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Link
              key={link.id}
              href={link.path}
              onClick={props.onClick}
              className="text-2xl tracking-[2px] text-white uppercase font-normal"
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DropdownMobile;
