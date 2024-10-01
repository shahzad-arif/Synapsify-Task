import React from "react";

//Partner Card
export const Partner = ({ partners = {} }) => {
	return (
		<div className="flex animate-scroll whitespace-nowrap">
			{partners.map((partner) => (
				<div key={partner.id} className="flex-shrink-0 mx-6">
					<img
						src={partner.logo}
						alt={partner.name}
						className="h-12 filter grayscale transition duration-300 ease-in-out hover:filter-none"
					/>
				</div>
			))}
		</div>
	);
};
