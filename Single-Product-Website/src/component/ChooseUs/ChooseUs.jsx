const ChooseUs = () => {
  return (
    <>
      <section className="img h-screen bg-no-repeat bg-cover ">
        <div className="2xl:container mx-auto px-44"></div>

        <div className="mt-44 w-[90%] mx-auto grid grid-cols-1 py-2 ">
          <h1 className="flex flex-col justify-center items-center font-[GreatVibes] md:text-4xl lg:text-3xl text-2xl font-semibold  text-black ">
            Why Choose US?
          </h1>
        </div>

        <div className="w-[100%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gape-9 mb-[260px] ">
        
          <div className="flex flex-col justify-center items-center space-y-2  lg:space-y-5  py-4 px-2 rounded-lg w-96 bg-base-100 shadow text-center">
            <h2 className=" text-1xl lg:text-2xl  text-primary mb-4 font-[GreatVibes] text-md font-semibold lg:font-normal">
              Fast Delivery
            </h2>
            <p className="text-sm lg:text-base font-[GreatVibes]">
              Get your favorite phone case delivered fast! Enjoy lightning-speed
              shipping on all orders to keep your style fresh and your phone
              protected.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 lg:space-y-5  py-4 px-2 rounded-lg w-96 bg-base-100 shadow text-center ">
            <h2 className=" text-1xl lg:text-2xl text-primary mb-4 font-[GreatVibes] text-md font-semibold lg:font-normal">
              Excellent Services
            </h2>
            <p className="text-sm lg:text-base font-[GreatVibes]">
              Experience excellent service from start to finish! From easy
              shopping to fast delivery, we ensure a smooth process for all your
              phone case needs.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2  lg:space-y-5 py-4 px-2  rounded-lg w-96 bg-base-100 shadow text-center ">
            <h2 className=" text-1xl lg:text-2xl text-primary mb-4 font-[GreatVibes] text-md font-semibold lg:font-normal">
              In-Home Shipping
            </h2>
            <p className="text-sm lg:text-base font-[GreatVibes]">
              Shop for stylish phone cases from the comfort of your home! Browse
              our collection online and get your favorites delivered right to
              your doorstep.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2   lg:space-y-5 py-4 px-2 rounded-lg w-96 bg-base-100 shadow text-center">
            <h2 className=" text-1xl lg:text-2xl text-primary mb-4 font-[GreatVibes] text-md font-semibold lg:font-normal">
              Unique Style
            </h2>
            <p className="text-sm lg:text-base font-[GreatVibes]">
              Discover phone cases that reflect your unique style! Shop our
              exclusive designs to stand out while keeping your phone protected
              and fashionable.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
