import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import Hamburger from "../../UI/Hamburger";
import DropdownMobile from "../DropdownMobile";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-30 top-0 w-screen">
      <div className="flex justify-between items-center bg-white px-6 md:px-10 py-8 md:py-8 relative lg:max-w-[calc(1240px+32px)] mx-auto lg:px-4 z-30">
        <Link href="/">
          <Image
            src="/images/logo-dark.svg"
            width={203}
            height={32}
            alt="logo"
          />
        </Link>
        <div className="hidden md:flex list-none gap-x-10">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="text-sm tracking-[2px] text-dark-grey uppercase font-normal group relative"
            >
              <span className="group-hover:text-black">{link.text}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 rounded-md bg-[#FFAD9B] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <Hamburger value={{ isOpen, setIsOpen }} />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DropdownMobile
            navlinks={navlinks}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
