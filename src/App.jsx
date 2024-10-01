import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Qualities from "./components/Qualities";
import { Partner } from "./components/Partner";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import Card from "./components/Card";
import FloatingButton from "./components/FloatingButton";
import cardData from "./utils/card.json";
import qualitiesData from "./utils/qualities.json";
import partnersData from "./utils/partner.json";
//In this project i am using anchor tags instead of Link from react-router-dom which is best appraoch for react beacuse it is a single page application
export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<div className="overflow-hidden p-4 mb-3 hidden lg:block">
				<div className="bg-white rounded-lg p-4">
					<div className="text-center mb-6">
						<h1 className="text-gray-600 font-extrabold text-xl my-4">
							Partners Who Trust Our Services
						</h1>
					</div>

					<Partner partners={partnersData} />
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				{(cardData ?? [])?.map((card) => (
					<Card
						key={card?.id}
						image={card?.image}
						title={card?.title}
						description={card?.description}
					/>
				))}
			</div>
			<Banner />
			<div className="px-4 sm:px-10 lg:px-20 my-7">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
					{(qualitiesData ?? [])?.map((quality) => (
						<Qualities
							key={quality?.id}
							id={quality?.id}
							title={quality?.title}
							description={quality?.description}
							icon={quality?.icon}
						/>
					))}
				</div>
			</div>
			<Calculator />
			<FloatingButton />
			<Footer />
		</>
	);
}
