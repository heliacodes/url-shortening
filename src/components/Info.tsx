import brandRecognition from "../../public/icon-brand-recognition.svg";
import detailedRecords from "../../public/icon-detailed-records.svg";
import fullyCustomizable from "../../public/icon-fully-customizable.svg";

const Info = () => {
  return (
    <section className="bg-lightGray max-sm:min-h-[100vh]">
      <div className="container">
        <div className="flex-center flex-col py-3">
          <h4 className="text-darkViolet font-bold text-center text-lg sm:text-xl pb-3">
            Advanced Statistics
          </h4>
          <p className="paragraph break-words leading-5">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        {/* info boxes */}
        <div className="relative w-full flex-center flex-col sm:flex-row gap-5 sm:gap-10 pt-5 mt-8 sm:mt-1">
          <div className="bg-cyan w-1 h-[85%] p-[.15] z-0 absolute sm:h-1 sm:w-[60%]"></div>

          <div
            className="card"
          >
            <div className="card-icon">
              <img src={brandRecognition} alt="" className="size-6" />
            </div>
            <div className="md:px-2 sm:pb-2">
              <h5 className="card-heading">
                Brand Recognition
              </h5>
              <p className="paragraph sm:text-start">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div
            className="card sm:mt-12"
          >
            <div className="card-icon">
              <img src={detailedRecords} alt="" className="size-6" />
            </div>
            <div className="md:px-2 sm:pb-2">
              <h5 className="card-heading">
                Detailed Records
              </h5>
              <p className="paragraph sm:text-start">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>

          <div
            className="card mt-24"
          >
            <div className="card-icon">
              <img src={fullyCustomizable} alt="" className="size-6" />
            </div>
            <div className="md:px-2 sm:pb-2">
              <h5 className="card-heading">
                Fully Customizable
              </h5>
              <p className="paragraph sm:text-start">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>

          {/* {infoBoxes.map((infoBox, index) => (
            <div
              key={infoBox.id}
              className={`relative w-48 sm:w-56 h-40 bg-white shadow-lg px-3 pt-9 pb-2 mb-8 rounded-lg leading-7 ${
                index > 0 ? `sm:mt-${index * 10}` : 'sm:mt-0'
              }`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-darkViolet rounded-full">
                <img
                  src={infoBox.icon}
                  alt={infoBox.title}
                  className="size-6"
                />
              </div>
              <h5 className="text-center text-darkViolet font-bold pb-1">
                {infoBox.title}
              </h5>
              <p className="paragraph">{infoBox.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Info;