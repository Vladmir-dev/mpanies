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
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <div className="mt-[100px] mb-[50px]">
      <div>
        <table className="max-w-[1000px] md:w-[800px] ">
          <thead className="">
            <tr className="border-[2px] border-solid">
              <th className="text-start">Image</th>
              <th className="text-start md:border-0 border-l-[2px]">Product</th>
              <th className="text-start md:border-0 border-l-[2px]">Price</th>
              <th className="text-start md:border-0 border-l-[2px]">Qty</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="w-full border-[2px] border-solid ">
                <td>
                  <img
                    src={item.image1}
                    alt="product"
                    className="w-[100px] h-[150px] mt-[20px]"
                  />
                </td>
                <td className="md:border-0 border-l-[2px]">{item.name}</td>
                <td className="md:border-0 border-l-[2px]">{item.price}</td>
                <td className="md:border-0 border-l-[2px]">{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <TableContainer component={Paper} className="table">
				<Table sx={{ minWidth: 500 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>
								<h1 className="md:text-[30px]">Product</h1>
							</TableCell>
							<TableCell>
								<h1 className="md:text-[30px]">Quantity</h1>
							</TableCell>

							<TableCell className="text-[30px]">
								<h1 className="md:text-[30px]">Total</h1>
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
									<TableCell className="md:min-w-[100px]">
										<h1 className="mt-[-100px]">
											UGX {item.price * item.qty}
										</h1>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer> */}
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 mt-[100px]">
        {/* <div className="flex flex-col ">
					<label>Order Special Instructions</label>
					<textarea className="border-solid w-[300px] h-[150px] border-[1px] border-black" />
				</div> */}
        <div className="flex flex-col md:justify-end md:items-end">
          <div className="flex gap-10 text-[19px]">
            <h2>Subtotal</h2>
            <h2 className="font-bold">UGX {totalPrice}</h2>
          </div>
          <Link to="/checkout">
            <button className="w-[250px] bg-black hover:bg-green-600 duration-500 text-white mt-[10px] p-3 text-[20px] ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
