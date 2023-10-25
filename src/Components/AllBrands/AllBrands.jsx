
import Swal from "sweetalert2";


const AllBrands = () => {

  const handleAddBrand = (event) => {

    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newBrand = { photo, name, brandName, type, rating, price, description };

    console.log(newBrand);
    // send data  to server
    fetch('https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/allBrands', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newBrand)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Brand Added Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }

      })

  }

  return (
    <div className="bg-slate-100 p-20 tex">
      <h2 className="text-4xl font-semibold" >Add new Brands</h2>
      <form onSubmit={handleAddBrand} className="items-center-center" >


        <div className="mb-8">
          <div className="form-control md:flex md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-2xl"> Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-2xl"> Brand Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="brandName" placeholder=" brandName" className="input input-bordered w-full" />
          </label>
        </div>

        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-2xl"> Type </span>
          </label>
          <label className="input-group">
            <input type="text" name="type" placeholder=" type" className="input input-bordered w-full" />
          </label>
        </div>

        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-2xl"> Price </span>
          </label>
          <label className="input-group">
            <input type="text" name="price" placeholder=" price" className="input input-bordered w-full" />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-2xl"> Description </span>
          </label>
          <label className="input-group">
            <input type="description" name="description" placeholder="description" className="input input-bordered w-full" />
          </label>
        </div>


        <div className="form-control md:w-1/2">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-2xl"> Rating</span>
            </label>
            <label className="input-group">
              <input type="text" name="rating" placeholder=" rating" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Brands" className="btn btn-block  text-2xl" />

      </form>
    </div>
  );
};

export default AllBrands;