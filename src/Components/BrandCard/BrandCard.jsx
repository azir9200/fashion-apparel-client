/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = ({ allbrand }) => {
  const { photo, brandName } = allbrand;

  return (
    <div className=" w-full p-2 items-center justify-center  shadow-2xl">
      <img className="w-full  h-48 object-cover" src={photo} alt="" />

      <div className="lg:flex items-center justify-around ">
        <p className="  text-2xl text-emerald-400  font-medium  text-blue-gray-700">
          {brandName}{" "}
        </p>

        <Link to={`/brandDetails/${brandName}`}>
          <button
            className=" text-3xl text-lime-500 border font-bold rounded-lg "
            type="button"
          >
            {" "}
            Explore More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
