import React from "react";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

//Nav Bar Component
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="navbar bg-base-100 px-10 sticky top-0 z-50">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">
					<img className="w-60" src="/src/assets/MainLogo.svg" alt="Logo" />
				</a>
			</div>

			{/* Navbar Center for Large Screens */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a className="text-lg text-gray-700 hover:underline">GPU Cloud</a>
					</li>
					<li>
						<a className="text-lg text-gray-700 hover:underline">Inference</a>
					</li>
					<li>
						<a className="text-lg text-gray-700 hover:underline">Clusters</a>
					</li>
					<li>
						<a className="text-lg text-gray-700 hover:underline">API</a>
					</li>
					<li>
						<a className="text-lg text-gray-700 hover:underline">Docs</a>
					</li>
				</ul>
			</div>

			<div className="navbar-end space-x-4 hidden lg:flex">
				<a className="btn text-gray-600 rounded-2xl hover:underline">Login</a>
				<a className="btn bg-[#245866] text-white rounded-2xl">SignUp</a>
			</div>

			<div className="navbar-end lg:hidden">
				<div className="dropdown dropdown-end">
					<button
						tabIndex={0}
						className="btn btn-ghost"
						onClick={toggleDropdown}
					>
						<IoIosMenu className="text-3xl" />
					</button>
					{isOpen && (
						<ul
							tabIndex={0}
							className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
						>
							<li className="flex items-center">
								<img
									src="/path/to/gpu-cloud-icon.svg"
									alt="GPU Cloud"
									className="w-5 h-5 mr-2"
								/>
								<a className="text-lg text-gray-700 hover:underline">
									GPU Cloud
								</a>
							</li>
							<li className="flex items-center">
								<img
									src="/path/to/inference-icon.svg"
									alt="Inference"
									className="w-5 h-5 mr-2"
								/>
								<a className="text-lg text-gray-700 hover:underline">
									Inference
								</a>
							</li>
							<li className="flex items-center">
								<img
									src="/path/to/clusters-icon.svg"
									alt="Clusters"
									className="w-5 h-5 mr-2"
								/>
								<a className="text-lg text-gray-700 hover:underline">
									Clusters
								</a>
							</li>
							<li className="flex items-center">
								<img
									src="/path/to/api-icon.svg"
									alt="API"
									className="w-5 h-5 mr-2"
								/>
								<a className="text-lg text-gray-700 hover:underline">API</a>
							</li>
							<li className="flex items-center">
								<img
									src="/path/to/docs-icon.svg"
									alt="Docs"
									className="w-5 h-5 mr-2"
								/>
								<a className="text-lg text-gray-700 hover:underline">Docs</a>
							</li>
							<li className="flex flex-row mt-3 items-center justify-center space-x-3">
								<a className="text-gray-600 hover:underline">Login</a>
								<a className="bg-[#245866] text-white rounded-2xl">SignUp</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
