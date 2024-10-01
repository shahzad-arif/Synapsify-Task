import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

//Hero Component
const Hero = () => {
	return (
		<div className="section-container">
			<div className="mx-4 my-7 py-6 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
				<div className="md:w-1/2 hidden md:block">
					{" "}
					{/* Hide on small screens, show on medium and above */}
					<img
						src="/src/assets/_image.webp"
						alt="ML Cloud"
						className="w-full h-auto"
					/>
				</div>

				<div className="md:w-1/2 space-y-7 px-4">
					<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
						The ML Cloud
					</h2>

					<p className="text-lg md:text-xl text-[#4A4A4A] text-center md:text-left">
						Premium dedicated GPU servers and clusters Model inference services
					</p>

					<div className="flex justify-center w-full md:justify-start">
						<button className="btn bg-primary rounded-md px-4 py-2 font-bold text-lg text-white flex items-center justify-center space-x-1">
							<span>Get Started</span>
							<IoIosArrowRoundForward className="text-2xl" />
						</button>
					</div>

					<p className="text-gray-500 text-center md:text-left">
						Easy sign up · Pay as you go
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
