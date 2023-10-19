import { Link } from "react-router-dom";


const ShareFiles = () => {
  return (
    <div>
      <div className="gap-6" >

        <div className="flex flex-col gap-6 text-gray-700 bg-blue-100 shadow-xl  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4  text-gray-700 bg-white  rounded-xl bg-clip-border">
            <img
              src="https://i.ibb.co/YfZJsKF/logo1.png"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-4xl text-emerald-400 antialiased font-medium leading-relaxed text-blue-gray-900">
                {brandName}
              </p>
              <p className="block font-sans  font-medium text-2xl leading-relaxed text-blue-gray-900">
                This is
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">

            </p>
          </div>
          <div className=" ">
            <Link to={`/brandDetails/`} >
              <button
                className="block p w-full text-3xl h-12 text-white rounded-lg bg-blue-900"
                type="button"  >  Explore Our Brand   </button></Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ShareFiles;