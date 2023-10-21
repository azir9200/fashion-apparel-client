import { Link } from "react-router-dom";


const BrandCard = ({ allbrand }) => {

  const { _id, photo, brandName, type } = allbrand;

  return (

    <div className="gap-6 items-center justify-center  shadow-xl" >

      <img className="w-60  h-56" src={photo} alt="" />

      <div className="lg:flex items-center justify-around ">
        <p className="  text-2xl text-emerald-400   font-medium  text-blue-gray-700">
          {brandName}    </p>


        <Link to={`/brandDetails/${brandName}`} >
          <button
            className=" text-3xl text-lime-500 border font-bold rounded-lg "
            type="button"  >  Explore More   </button></Link>


      </div>



      {/* <Link to={`/brandDetails/${brandName}`} >
        <button
          className="block p w-full text-3xl h-8 text-white font-bold rounded-lg bg-blue-400"
          type="button"  >  Explore Our Brand   </button></Link> */}




    </div>
  );
};

export default BrandCard;