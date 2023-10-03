import React from "react";
import logo from "../assets/mpanies1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="flex justify-center items-center w-full h-[100vh] bg-green-200">
			<div className="bg-white/80 shadow-md backdrop-blur-md rounded-md md:w-[30%] p-4">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-center text-[30px]">Sign Up</h1>
					<img src={logo} alt="logo" className="w-[200px]" />
				</div>
				<div className="flex flex-col justify-center py-2 place-items-center">
					<div className="w-full flex py-2 gap-5 flex-col items-center">
						<div className="flex flex-col">
							<label>First Name</label>
							<input
								type="text"
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
						</div>
						<div className="flex flex-col">
							<label>Last Name</label>
							<input
								type="text"
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
						</div>
						<div className="flex flex-col">
							<label>Email</label>
							<input
								type="text"
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
						</div>
						<div className="flex flex-col">
							<label>Password</label>
							<input
								type="text"
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
						</div>
						<div className="flex flex-col">
							<label>Confirm Password</label>
							<input
								type="text"
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
						</div>
						<button className="bg-black text-white md:max-w-[450px] md:w-[400px] py-3 rounded-md hover:bg-green-600 duration-500">
							Sign Up
						</button>
						<div className="flex gap-4">
							<h4>Already Have An Account ?</h4>

							<Link to="/login">
								<h4 className="cursor-ointer text-blue-500">
									Sign In
								</h4>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
