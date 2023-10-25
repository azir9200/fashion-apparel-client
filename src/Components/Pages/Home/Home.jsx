import { useLoaderData } from "react-router-dom";
import BrandCard from "../../brandCard/brandCard";
import BannerPage from "../../Banner/Banner";
import BestDealBanner from "./BestDealBanner";
import BrandPromotion from "./BrandPromotion";

const Home = () => {
  const allbrands = useLoaderData();

  return (
    <div className="mt-8 bg-gray-100 p-4">
      <BannerPage></BannerPage>

      <h2 className="bg-emerald-200 text-center text-4xl py-2 my-16">
        Choose One Of Your Best Brands from our Site
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-4 gap-4">
        {allbrands.map((allbrand) => (
          <BrandCard key={allbrand._id} allbrand={allbrand}></BrandCard>
        ))}
      </div>
      <div className="text-center mt-8 mb-12">
        <div className="relative inline-block">
          <div className={`absolute  inset-0 bg-blue-700 rounded-3xl`}></div>
          <div className="relative z-10 py-4 px-16 text-white font-semibold text-3xl">
            Best Deals
          </div>
        </div>
      </div>
      <BestDealBanner></BestDealBanner>
      <BrandPromotion></BrandPromotion>
    </div>
  );
};

export default Home;
