import React from "react";

//Card component
const Card = ({ image = "", title = "", description = "", onclickButton }) => {
	return (
		<div className="card bg-card w-full sm:w-80 h-auto shadow-xl mx-4 my-4 rounded-lg">
			<figure className="px-4 pt-4 sm:px-10 sm:pt-10">
				<img src={image} className="rounded-xl w-full h-auto" alt={title} />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title text-lg sm:text-xl font-bold text-white">
					{title}
				</h2>
				<p className="text-white text-sm sm:text-base">{description}</p>
				<div className="card-actions mt-4">
					<button
						onClick={onclickButton}
						className=" btn  border border-transparent bg-secondary text-white w-full sm:w-auto "
					>
						View more
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
