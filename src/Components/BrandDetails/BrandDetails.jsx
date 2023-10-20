import { useLoaderData } from "react-router-dom";
import BrandShow from "../BrandShow/BrandShow";


const BrandDetails = () => {

  const brands = useLoaderData();

  const handleDelete = _id => {

    console.log('Delete', _id)
    fetch(`http://localhost:5000/allCards/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  console.log(brands);
  return (
    <div className="  md:flex  gap-6 "  >


      <div className=" grid grid-cols-1 md:grid-cols-2  gap-6" >

        {
          brands.map(brand => <BrandShow
            key={brand.id}
            brand={brand}
          ></BrandShow>)
        }

      </div>
      <div className="w-1/3" >


        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
          <p className="text-2xl bg-red-200" >Avertise for Now</p>
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-12 h-12 mb-4 text-pink-500"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              ></path>
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
            </svg>

            <img src="https://i.ibb.co/99HwcxS/digital-laptop-working-global-business-concept.jpg" alt="" />

            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              UI/UX Review Check
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Because about motivating the doers. Because  here to follow my
              dreams and inspire others.
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
              href="#"
            >
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"

                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path

                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-sky-400" >Have plan to visit ?  choose best Destinatin from here.</h3>
          <img src="https://i.ibb.co/TRTDL00/visit.png" alt="" />
        </div>
        <div  >
          <h3 className="text-2xl" > Best shop of the city.  </h3>
          <p className="text-xl">Take a best Souvenir with you.</p>
          <img src="https://i.ibb.co/VLdYV5J/souver.png" alt="" />
        </div>

      </div>




    </div >
  );
};

export default BrandDetails;