import { useLoaderData } from "react-router-dom";


const BrandDetails = () => {

  const brand = useLoaderData();
  const { photo, type } = brand;
  console.log(brand);

  console.log(brand.type);
  return (
    <div>
      <img src={photo} alt="" />

      <h1> {type} </h1>
      <h1>Details  brands here  </h1>

    </div>
  );
};

export default BrandDetails;