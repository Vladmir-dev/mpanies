import React from "react";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Shop from "../components/shop/Shop";

const SubCategoriesPage = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };
  const { id, subcategoryId } = useParams();
  // console.log("sub catgory id",id);
  const products = useSelector((state) => state.products.products);

  const filteredProducts = products.filter(
    (product) =>
      product.category.id === Number(id) &&
      product.category.subcategories.some(
        (subcategory) => subcategory.id === Number(subcategoryId)
      )
  );

  console.log("sub category products", filteredProducts);

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Collection</h1>
        </div>
      </div>
      <Shop data={filteredProducts} />
      <Footer />
    </div>
  );
};

export default SubCategoriesPage;
