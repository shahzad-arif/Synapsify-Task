import React from "react";

const Banner = () => {
	return (
		<div className="mx-4 sm:mx-10 lg:mx-20 my-5">
			<div className="hero min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full bg-gradient-to-b from-custom-dark to-custom-light rounded-lg shadow-lg">
				<div className="hero-content flex-col lg:flex-row lg:space-x-8 px-4 sm:px-8 lg:px-16">
					<img
						src="/src/assets/banner.webp"
						className="w-full lg:w-1/2 h-auto rounded-lg shadow-2xl"
						alt="Banner"
					/>
					<div className="text-center lg:text-left">
						<h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
							H100 clusters
						</h1>
						<p className="py-3 text-white text-sm sm:text-base lg:text-md">
							Our clusters exclusively use the NVIDIA H100 SXM5 80GB NVLINK
							modules.
						</p>
						<p className="py-3 text-white text-sm sm:text-base lg:text-md">
							Via NVLINK, the H100 achieves a chip-to-chip interconnect
							bandwidth of 900GB/s and leverages a 3200gbit/s InfiniBand™
							interconnect.
						</p>
						<button className="btn bg-secondary border border-transparent text-white px-6 py-3">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
