const Form = () => {
  return (
    <form className="flex flex-col lg:items-end text-white gap-y-6">
      <input
        className="bg-transparent border-b border-white focus:outline-none lg:w-[380px] placeholder:text-white pb-3"
        type="text"
        placeholder="Name"
      />
      <input
        className="bg-transparent border-b border-white focus:outline-none lg:w-[380px] placeholder:text-white pb-3"
        type="email"
        placeholder="Email Address"
      />
      <input
        className="bg-transparent border-b border-white focus:outline-none lg:w-[380px] placeholder:text-white pb-3"
        type="number"
        placeholder="Phone"
      />
      <textarea
        className="bg-transparent border-b border-white focus:outline-none lg:w-[380px] placeholder:text-white pb-3"
        name="Your Message"
        id="message"
        placeholder="Your Message"
      />
      <button
        type="submit"
        className="bg-white text-black hover:bg-light-peach hover:text-white transition duration-300 rounded-md px-12 w-[152px] h-[56px]"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
