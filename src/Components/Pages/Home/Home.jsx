import { useLoaderData } from "react-router-dom";
import BrandCard from "../../brandCard/brandCard";
import BannerPage from "../../Banner/Banner";



const Home = () => {

  const allbrands = useLoaderData();
  console.log(allbrands);
  return (
    <div className=" mt-8" >
      {/* <BannerPage></BannerPage> */}
      <h2 className=" bg-emerald-200 text-4xl">Choose One Of Your Best Brands from our Site    </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
        {
          allbrands.map(allbrand => <BrandCard
            key={allbrand._id}
            allbrand={allbrand}
          ></BrandCard>)
        }


      </div>

    </div>
  );
};

export default Home;