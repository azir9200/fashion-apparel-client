import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Provider";
import swal from "sweetalert";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch(`https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/getCartData?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartData(data);
        console.log(data);
      });
  }, [setCartData, user]);

  const handleRemoveFromCart = (productId) => {
    console.log(productId);
    fetch(`https://fashion-apparel-server-pe9ejalgf-azir-uddins-projects.vercel.app/deleteCardData`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userEmail: user.email,
        productId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCartData((prevCartData) =>
          prevCartData.filter((item) => item._id !== productId)
        );
        swal({
          title: "Success",
          text: `Deleted One Item From Your Cart Succesfully`,
          icon: "success",
          button: "Okay",
        });
      })
      .catch((error) => {
        console.log("Error in deleting cart element: ", error);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cartData.map((item) => (
        <div
          key={item._id} // Add a unique key for each item
          className="relative flex flex-col justify-between bg-white rounded-lg p-6 shadow-md"
        >
          <div className="h-40 overflow-hidden">
            <img
              src={item.photo}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-4">
            <h6 className="text-xl font-semibold text-lime-500">
              Product Name: {item.name}
            </h6>
            <p className="text-gray-700">BrandName: {item.brandName}</p>
            <p className="text-xl font-semibold text-gray-700">
              Price: {item.price}
            </p>
            <p className="text-base text-gray-700">
              <span className="font-semibold">About Our Product:</span>{" "}
              {item.description}
            </p>
            <p className="text-gray-700">Rating: {item.rating}</p>
          </div>
          <div className="flex ">
            <button
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => handleRemoveFromCart(item._id)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
