const BrandPromotion = () => {
  return (
    <div className="relative flex w-full max-w-full flex-row-reverse rounded-xl bg-white bg-clip-border text-gray-700  shadow-xl py-4">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img
          src="https://i.ibb.co/LSJ8T6H/modern-office-desk-composition.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
          startups
        </h6>
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Lyft launching cross-platform service this week
        </h4>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <a className="inline-block" href="#">
          <button
            className="flex items-center gap-2 text-xl  font-bold text-pink-500 uppercase transition-all hover:bg-blue-100 hover:px-4 hover:py-2 hover:rounded-3xl active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default BrandPromotion;
