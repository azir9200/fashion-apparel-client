import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const CartDetails = () => {
  const [addToCart, setAddToCart] = useState([]);


  const carts = useLoaderData()

  const { name, photo, brandName, price,
    description, rating } = carts;


  const handleAddCart = (carts) => {
    setAddToCart([...addToCart, carts])
  };
  console.log(addToCart);

  return (
    <div className="items-center content-center flex" >

      <div className="relative md:flex items-center justify-center text-center w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
        <div className="relative w-96 h-80 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={photo}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-lime-500">
            Product Name:  {name}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            BrandName: {brandName}
          </h4>
          <p className="block mb-8 font-sans text-2xl antialiased font-semibold leading-relaxed text-gray-700">
            Price:  {price}
          </p>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <span className="text-xl font-semibold" > About Our Product:</span>   {description}
          </p>
          <p>Rating: {rating}</p>
          <a className="inline-block" href="#">

            <Link to='/myCart'  >

              < button
                onClick={() => handleAddCart(carts)}

                className="flex items-center gap-2 px-6 py-3 font-sans text-2xl font-bold text-center text-green-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"      >
                Add to Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>    </Link>
          </a>
        </div>
      </div>

    </div >
  );
};

export default CartDetails;