import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import Footer from "../components/Footer";

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

  const products = useSelector((state) => state.products.products);

  const product = products?.filter((item) => item.id == id);

  console.log("The product ===>", product);

  return (
    <div className="box-border">
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Product</h1>
        </div>
      </div>

      {product && (
        <div className="flex md:flex-row flex-col p-4 m-10 justify-center gap-10 items-start">
          <div>
            <img
              src={product[0].image}
              alt={product[0].name}
              className="w-[400px] h-[660px]"
            />
          </div>
          <div className="flex  flex-col items-start md:w-[40%] gap-5 w-full justify-start">
            <h1 className="text-[50px] fex-wrap md:text-left text-center">
              {product[0].name}
            </h1>
            <h2 className="text-[25px] md:text-left text-center">
              UGX {product[0].price}
            </h2>

            <h2 className={`text-[25px] md:text-left text-center ${product[0].in_stock ? "text-green-400" : "text-red-500"}`}>
              {product[0].in_stock ? "In Stock" : "Out Of Stock"}
            </h2>

            <div className="mt-[20px] mb-[30px] flex flex-col justify-center items-center">
              <label className="text-[25px] md:text-left text-center">
                Quantity
              </label>
              <div className="flex mt-[10px] justify-between items-center py-2 px-4 gap-5 w-[120px]  text-[18px] border-solid border-[1px] border-black">
                <button
                // onClick={() => dispatch(decrease_qty(item))}
                >
                  -
                </button>
                <h4>{!product[0].qty ? 0 : product[0].qty}</h4>
                <button
                // onClick={() => dispatch(add_to_cart(item))}
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-black text-white px-4 py-3 hover:bg-green-500 duration-500">
              Add To Cart
            </button>
          </div>
        </div>
      )}

      <div className="md:m-10 m-3 flex justify-center items-center">
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

      <Footer />
    </div>
  );
};

export default ProductDetial;
