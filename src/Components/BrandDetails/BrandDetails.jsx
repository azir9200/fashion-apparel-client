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
    <div className="justify-center items-center "  >


      <div className="grid grid-cols-1 md:grid-cols-2 " >


        {
          brands.map(brand => <BrandShow
            key={brand.id}
            brand={brand}
          ></BrandShow>)
        }

      </div>




    </div >
  );
};

export default BrandDetails;