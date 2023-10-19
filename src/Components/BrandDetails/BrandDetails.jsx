import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {

  const brand = useLoaderData();
  const { photo } = brand;
  console.log(brand);

  console.log(brand.type);
  return (
    <div>
      <img src={photo} alt="" />

      <h1>  </h1>
      <h1>Details  brands here {brand.length} </h1>

    </div>
  );
};

export default BrandDetails;