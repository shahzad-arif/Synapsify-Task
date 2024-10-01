import React from "react";

//Footer Component
const Footer = () => {
	return (
		<>
			<footer className="footer  bg-[#E5F0F2] text-base-content p-10 flex flex-wrap justify-center text-center md:justify-between md:text-left">
				<nav className="w-full md:w-auto mb-6 md:mb-0 flex flex-col items-center md:items-start">
					<h6 className="footer-title">
						<img
							src="/src/assets/MainLogo.svg"
							alt="Main Logo"
							className="w-42 md:w-60 mx-auto"
						/>
					</h6>
					<a className="link link-hover block">
						Premium GPU servers & clusters
					</a>
					<a className="link link-hover block">Model inference services</a>
				</nav>
				<nav className="w-full md:w-auto mb-6 md:mb-0 flex flex-col items-center md:items-start">
					<h6 className="footer-title text-xl">GPU Clusters</h6>
					<a className="link link-hover block">GPU Clusters</a>
					<a className="link link-hover block">GPU Cloud</a>
					<a className="link link-hover block">H100 SXM5</a>
					<a className="link link-hover block">GB200</a>
				</nav>
				<nav className="w-full md:w-auto mb-6 md:mb-0 flex flex-col items-center md:items-start">
					<h6 className="footer-title text-xl">Inference</h6>
					<a className="link link-hover block">Serverless Inference</a>
					<a className="link link-hover block">ML Pipeline Builder</a>
				</nav>
				<nav className="w-full md:w-auto mb-6 md:mb-0 flex flex-col items-center md:items-start">
					<h6 className="footer-title text-xl">Company</h6>
					<a className="link link-hover block">About us</a>
					<a className="link link-hover block">Contact</a>
					<a className="link link-hover block">Jobs</a>
					<a className="link link-hover block">Terms of service</a>
				</nav>
				<nav className="w-full md:w-auto mb-4 md:mb-0 flex flex-col items-center md:items-start">
					<h6 className="footer-title text-xl">Resources</h6>
					<a className="link link-hover block">Blog</a>
					<a className="link link-hover block">Docs</a>
					<a className="link link-hover block">API</a>
				</nav>
			</footer>

			<footer className="footer text-base bg-[#E5F0F2] border-t border-base-300 px-10 py-4 flex flex-row items-center justify-center mb-5">
				<div className="w-full flex justify-center">
					<p className="text-center text-gray-400 font-bold">
						2024 All rights reserved
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
