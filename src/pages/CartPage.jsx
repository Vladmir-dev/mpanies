import React from "react";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const CartPage = () => {
	const bgImageStyle = {
		backgroundImage: ` url(${breadcrumb})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		// transition: "background 0.6s ease-in-out",
		backgroundAttachment: "fixed",
	};

	return (
		<div className="box-border font-sans">
			<Navbar />
			<div style={bgImageStyle} className="h-[200px] w-full">
				<div className="flex justify-center items-center h-full  bg-green-200/60">
					<h1 className="uppercase text-[30px] mt-[50px]">
						YOUR SHOPPING BAG
					</h1>
				</div>
			</div>
			<div className="mt-[100px] flex flex-col justify-center items-center">
				<h1 className="text-[40px]">Your Bag</h1>
				<Link to="/shop">
					<h2 className="text-[20px] font-light cursor-pointer hover:text-green-500">
						Continue Shopping
					</h2>
				</Link>

				<div>
					<Cart />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CartPage;
