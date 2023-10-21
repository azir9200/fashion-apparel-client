import { Link } from "react-router-dom";


const BrandShow = ({ brand }) => {

  const { _id, name, photo, brandName, price,
    description, rating } = brand;

  return (
    <div>

      <div className=" flex flex-col  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className=" mx-4 mt-4 w-80 h-80 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
          <img
            src={photo}
            className=" "
          />
        </div>
        <div className="p-6">
          <div className=" items-center justify-between mb-2">
            <p className="block font-sans text-4xl antialiased font-medium leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-blue-gray-900">
              Brand Name: {brandName}
            </p>
            <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-blue-gray-900">
              Price : {price}
            </p>
            <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
              Rating : {rating}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            About : {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/cartDetails/${_id}`} >

            <button
              className="block w-full bg-lime-300  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"  >
              Show Product Details
            </button>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default BrandShow;