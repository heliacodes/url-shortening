import hero from "../../public/illustration-working.svg";

const Hero = () => {
  return (
    <section>
      <div className="container pb-20 bg-red">
        <img src={hero} alt="hero image" className="ml-14" />

        <div className="flex-center flex-col mt-5">
          <h2 className="text-3xl font-bold sm:text-5xl text-darkBlue sm:font-extrabold text-center">
            More than just shorter links
          </h2>
          <p className="text-center text-sm text-gray text-wrap font-semibold mt-3">
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
