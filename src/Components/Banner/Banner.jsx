const Banner = () => {
  return (
    <div
      className="hero h-[65vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/n0fYfjw/banner2.png)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" ">
          <div className="flex  gap-12 justify-evenly">
            <h1 className="mb-5 text-5xl  text-emerald-200  font-bold">
              GET A PERFECT LUXURIOUS LOOKS
            </h1>
            <p className="text-5xl text-emerald-300 font-bold">
              Make This Signature Style of Clothing
            </p>
          </div>
          <button className="btn btn-info font-bold mt-12 px-8 py-4">Get The App Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
