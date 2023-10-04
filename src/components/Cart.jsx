import React from "react";
import "./cart.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../features/cart/cartActions";

const Cart = () => {
	const cart = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	return (
		<div className="mt-[100px] mb-[50px]">
			<TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 1200 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<h1 className="text-[30px]">Product</h1>
							</TableCell>
							<TableCell>
								<h1 className="text-[30px]">Quantity</h1>
							</TableCell>

							<TableCell className="text-[30px]">
								<h1 className="text-[30px]">Total</h1>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cart &&
							cart.length > 0 &&
							cart.map((item, index) => (
								<TableRow>
									<TableCell>
										<div className="flex gap-8 p-2">
											<img
												src={item.image1}
												className="w-[150px]"
											/>
											<div className="flex flex-col gap-3">
												<h4 className="text-[20px]">
													{item.name}
												</h4>
												<h4 className="font-light">
													UGX {item.price}
												</h4>
											</div>
										</div>
									</TableCell>
									<TableCell className="">
										<div className="flex mt-[-100px] justify-between  items-center py-2 px-4 gap-5 w-[120px]  text-[18px] border-solid border-[1px] border-black">
											<button
												onClick={() =>
													dispatch(decrease_qty(item))
												}
											>
												-
											</button>
											<h4>{item.qty}</h4>
											<button
												onClick={() =>
													dispatch(add_to_cart(item))
												}
											>
												+
											</button>
										</div>
									</TableCell>
									<TableCell className="min-w-[100px]">
										<h1 className="mt-[-100px]">
											UGX {item.price * item.qty}
										</h1>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<div>hello</div>
		</div>
	);
};

export default Cart;
