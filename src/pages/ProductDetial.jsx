import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import Footer from "../components/Footer";
import { add_to_cart } from "../features/cart/cartActions";
import Scard from "../components/shop/Scard";
import RCard from "../components/RCard";

const ProductDetial = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };
  const { id } = useParams();

  const products = Object.values(
    useSelector((state) => state.products.products)
  );
  const cart = useSelector((state) => state.cart.cartItems);

  //   const incart = useSelector()

  const product = products?.filter((item) => item.id == id);

  console.log("The products ===>", products);

  const [quantity, setQuantity] = useState(
    !product[0].qty ? 0 : product[0].qty
  );

  // let incart;

  // useEffect(() => {
  //   incart = cart?.filter((item) => item.id == product.id);
  // }, [product]);

  const dispatch = useDispatch();

  return (
    <div className="box-border">
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Product</h1>
        </div>
      </div>

      {product && (
        <div className="flex md:flex-row flex-col  mt-[20px]">
          <div className="flex md:flex-row flex-col p-4 m-10 justify-center gap-10 items-start">
            <div>
              <img
                src={product[0].image1}
                alt={product[0].name}
                className="md:w-[400px] w-[300px] md:h-[600px] h-[380px]"
              />
            </div>
            <div className="flex  flex-col md:items-start items-center md:w-[40%] gap-5 w-full md:justify-start justify-center">
              <h1 className="md:text-[50px] text-[30px] fex-wrap md:text-left text-center">
                {product[0].name}
              </h1>
              <h2 className="md:text-[25px] text-[20px] md:text-left text-center">
                UGX {product[0].price}
              </h2>

              <h2
                className={`text-[25px] md:text-left text-center ${
                  product[0].in_stock ? "text-green-400" : "text-red-500"
                }`}
              >
                {product[0].in_stock ? "In Stock" : "Out Of Stock"}
              </h2>

              <div className="mt-[20px] mb-[30px] flex flex-col justify-center items-center">
                <label className="text-[25px] md:text-left text-center">
                  Quantity
                </label>
                <div className="flex mt-[10px] justify-between items-center py-2 px-4 gap-5 w-[120px]  text-[18px] border-solid border-[1px] border-black">
                  <button
                    onClick={() =>
                      setQuantity(quantity < 0 ? quantity : quantity - 1)
                    }
                  >
                    -
                  </button>
                  <h4>{quantity}</h4>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button
                onClick={() =>
                  dispatch(add_to_cart({ product: product[0], qty: quantity }))
                }
                className="bg-black text-white px-4 py-3 hover:bg-green-500 duration-500"
              >
                {/* {incart ? "Added To Bag" : "Add To Bag"} */}
                Add To Cart
              </button>
            </div>
          </div>

          <div className="md:w-[50%] m-3 flex justify-center items-center">
            <div className="md:w-[80%] w-full border-solid border-[2px]  flex flex-col gap-10 p-4 border-black">
              <div>
                <h1 className="text-[25px]">Description</h1>
                <p>{product[0].description}</p>
              </div>
              <div>
                <h1 className="text-[25px]">How To Use</h1>
                <p>{product[0].how_to_use}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-[30px] text-center">Related Products</h1>
        <div className="grid grid-cols-3 md:gap-10 gap-5 p-5 mb-[50px]">
          {products.length > 0 &&
            products
              ?.filter(
                (item) =>
                  item.category === product[0].category &&
                  item.id !== product[0].id
              )
              .slice(0, 8)
              .map((item) => <RCard key={item.id} item={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetial;
