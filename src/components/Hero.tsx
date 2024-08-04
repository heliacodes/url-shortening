import hero from "../../public/illustration-working.svg";

const Hero = () => {
  return (
    <section>
      <div className="container pb-14 sm:flex sm:flex-row-reverse sm:gap-4">
        <img
          src={hero}
          alt="hero image"
          className="max-sm:ml-14 sm:min-w-[40%] sm:-mr-40"
        />

        <div className="flex items-center flex-col sm:items-start sm:gap-2 mt-5 -mb-5">
          <h2 className="text-3xl font-bold sm:text-5xl text-darkBlue sm:font-extrabold text-center sm:text-start">
            More than just shorter links
          </h2>
          <p className="text-center text-sm text-gray text-wrap font-semibold mt-3 mb-1 break-words sm:text-start">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="" className="button mt-4 rounded-full px-7">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
