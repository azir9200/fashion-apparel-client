import { Link } from "react-router-dom";


const BrandCard = ({ allbrand }) => {

  const { _id, photo, brandName, type } = allbrand;

  return (

    <div className="gap-6  shadow-xl" >

      <img className="w-60  h-56" src={photo} alt="" />

      <div className="flex items-center justify-around ">
        <p className="  text-4xl text-emerald-400   font-medium  text-blue-gray-700">
          {brandName}    </p>

        <p className="  font-medium text-2xl text-blue-gray-900">  {type}  </p>
      </div>



      <Link to={`/brandDetails/${_id}`} >
        <button
          className="block p w-full text-3xl h-8 text-white font-bold rounded-lg bg-blue-400"
          type="button"  >  Explore Our Brand   </button></Link>




    </div>
  );
};

export default BrandCard;