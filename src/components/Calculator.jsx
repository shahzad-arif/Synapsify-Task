import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Calculator = () => {
	const options = [
		{ label: "Price on demand", price: 3.35 },
		{ label: "Custom pricing", price: 4.5 },
		{ label: "High-end setup", price: 6.0 },
		{ label: "GPU optimized", price: 5.2 },
		{ label: "Advanced solution", price: 7.1 },
	];

	const [gpuModel, setGpuModel] = useState("H100 SXM5");
	const [numGPUs, setNumGPUs] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);

	const totalDots = options.length;

	const handleForward = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDots);
	};

	const handleBackward = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? totalDots - 1 : prevIndex - 1
		);
	};

	const handleGpuChange = (e) => {
		setGpuModel(e.target.value);
	};
	const handleNumGpusChange = (num) => {
		setNumGPUs(num);
	};

	const pricePerGpu = options[currentIndex].price;
	const totalPrice = (pricePerGpu * numGPUs).toFixed(2);

	return (
		<>
			<div className="hero min-h-screen px-4 py-8">
				<div className="hero-content flex flex-col lg:flex-row w-full lg:h-full">
					<div className="text-center justify-center bg-[#E5F0F2] w-full lg:w-1/2 h-full flex flex-col p-6 rounded-md">
						<h1 className="font-semibold text-xl mb-4">Price Calculator</h1>
						<div className="flex flex-col justify-start items-start space-y-4">
							<label htmlFor="gpuModel" className="text-lg">
								GPU Model
							</label>
							<select
								id="gpuModel"
								className="select w-full max-w-xs mb-4"
								value={gpuModel}
								onChange={handleGpuChange}
							>
								<option>H100 SXM5</option>
								<option>H200 SXM5</option>
								<option>A100 SXM4</option>
								<option>GB200</option>
								<option>CPU Node</option>
							</select>

							<label htmlFor="numGPUs" className="text-lg">
								Number of GPUs
							</label>
							<div className="flex flex-row space-x-2 mb-4">
								{Array.from({ length: 5 }, (_, index) => (
									<button
										key={index}
										onClick={() => handleNumGpusChange(index + 1)}
										className={`border border-black rounded-md px-3 py-2 text-sm ${
											numGPUs === index + 1 ? "bg-gray-400" : ""
										}`}
									>
										{index + 1}
									</button>
								))}
							</div>

							<div className=" flex flex-col border border-transparent bg-white items-start justify-start space-y-2 rounded-lg p-4 shadow-md w-full">
								<h1 className="font-semibold">{`${numGPUs}x ${gpuModel} 80GB`}</h1>
								<p>{numGPUs * 30} CPUs</p>
								<p>{numGPUs * 120} GB RAM</p>
								<p>{numGPUs * 80} GB CPU RAM</p>
							</div>

							<p>This setup is best for:</p>
							<div className="flex flex-row space-x-2 flex-wrap my-2">
								<p className="border border-gray-400 rounded-lg px-2 text-sm mb-2">
									Gargantuan ML models
								</p>
								<p className="border border-gray-400 rounded-lg px-2 text-sm mb-2">
									Multi-GPU training
								</p>
								<p className="border border-gray-400 rounded-lg px-2 text-sm mb-2">
									FP64 HPC
								</p>
								<p className="border border-gray-400 rounded-lg px-2 text-sm mb-2">
									NVLINK
								</p>
							</div>

							<div className="flex flex-col items-center justify-center w-full py-5">
								<h1 className="text-center font-bold text-primary text-5xl">
									${totalPrice}/h
								</h1>

								<div className="flex flex-row py-5 items-center space-x-4">
									<button
										onClick={handleBackward}
										className="btn bg-transparent text-primary"
									>
										<IoIosArrowBack className="w-10 h-6" />
									</button>

									<div className="flex flex-col px-2 space-y-2 text-center">
										<h1 className="text-gray-600 font-bold">
											{options[currentIndex].label}
										</h1>

										<div className="flex flex-row justify-center items-center space-x-2">
											{Array.from({ length: totalDots }, (_, index) => (
												<span
													key={index}
													className={`h-3 w-3 rounded-full ${
														currentIndex === index
															? "bg-primary"
															: "bg-gray-400"
													}`}
												></span>
											))}
										</div>
									</div>

									<button
										onClick={handleForward}
										className="btn bg-transparent text-primary"
									>
										<IoIosArrowForward className="w-10 h-6" />
									</button>
								</div>

								<div className="items-center justify-center border border-gray-600 px-4 rounded-lg py-2">
									<p className="text-black text-md font-semibold pr-2">
										Save up to 49% with Dynamic Pricing{" "}
										<span>
											<button className="text-gray-400 font-semibold border-black border-b">
												View More
											</button>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-start justify-center p-4">
						<h1 className="text-xl md:text-2xl font-semibold text-primary text-left pb-5">
							All infrastructure powered by renewable energy
						</h1>
						<h1 className="text-3xl md:text-4xl font-semibold text-left">
							High-end GPU instances
						</h1>
						<p className="pt-4 text-sm md:text-base text-left">
							Order and access your GPU in just minutes via our intuitive
							dashboard or API.
						</p>
						<p className="pt-2 pb-3 text-sm md:text-base text-left">
							Your machine is automatically set up according to your preferences
							and you receive access in a few minutes.
						</p>

						<div className="flex flex-row sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4  ">
							<button className="btn bg-primary text-white  py-2 mt-2 sm:mt-0">
								Get Started
							</button>
							<button className="btn btn-outline text-primary border-primary mx-2 w-52 ">
								View all products
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Calculator;
