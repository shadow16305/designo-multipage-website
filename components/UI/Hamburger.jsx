const Hamburger = ({ value }) => {
  const { isOpen, setIsOpen } = value;

  const hamburgerLine =
    "h-1 w-8 my-1 transition ease transform duration-300 bg-black";

  return (
    <button
      className="md:hidden flex flex-col h-12 w-12 justify-center items-center group relative z-30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${hamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3" : ""
        }`}
      />
      <div className={`${hamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
