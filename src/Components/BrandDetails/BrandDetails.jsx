import { useLoaderData } from "react-router-dom";


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
    <div>
      <h1>  </h1>
      <h1>Details  brands here {brands.length} </h1>

      {
        brands.map(brand => <p key={brand.id}>
          <p> {brand.branName}   </p>
          {brand.type}
          <button onClick={() => handleDelete(brand._id)} >Delete</button>
        </p>)
      }

    </div>
  );
};

export default BrandDetails;