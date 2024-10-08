import React from "react";

//Floating Acion Button
const FloatingButton = () => {
	return (
		<div className="fixed bottom-4 right-4">
			<button className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-secondry transition-transform transform hover:scale-105">
				<svg
					fill="#FFFFFF"
					height="27px"
					width="27px"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 458 458"
				>
					<g>
						<g>
							<path
								d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243
                                c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252
                                C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062
                                c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15
                                s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15
                                s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"
							/>
						</g>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default FloatingButton;
