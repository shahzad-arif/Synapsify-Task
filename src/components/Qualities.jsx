import React from "react";
import {
	IoIosFlash,
	IoIosRocket,
	IoIosSpeedometer,
	IoIosHeart,
} from "react-icons/io";

// Map icons to names
const iconMap = {
	IoIosFlash: IoIosFlash,
	IoIosRocket: IoIosRocket,
	IoIosSpeedometer: IoIosSpeedometer,
	IoIosHeart: IoIosHeart,
};

const Qualities = ({ id, title = "", description = "", icon = "" }) => {
	const IconComponent = iconMap[icon]; // Get the correct icon component
	return (
		<div className="card bg-base-100 w-full p-2" key={id}>
			<figure className="flex justify-center pt-2">
				{IconComponent && (
					<IconComponent className="rounded h-12 w-12 text-primary" />
				)}
			</figure>
			<div className="card-body items-center text-center p-2">
				<h2 className="card-title text-md text-primary font-bold">{title}</h2>
				<p className="text-sm text-gray-400 font-bold">{description}</p>
			</div>
		</div>
	);
};

export default Qualities;
