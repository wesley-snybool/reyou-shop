import Card from "@components/common/card";
import SectionHeader from "@components/common/section-header";
import Carousel from "@components/ui/carousel/carousel";
import CardLoader from "@components/ui/loaders/card-loader";
import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";
import { useCategoriesQuery } from "@framework/conceitosemalta/get-all-conceitos";
import { ROUTES } from "@utils/routes";
import Alert from "@components/ui/alert";
import { SwiperSlide } from "swiper/react";

interface CategoriesProps {
	sectionHeading: string;
	className?: string;
	type?: "rounded" | "circle";
}

const breakpoints = {
	"1720": {
		slidesPerView: 8,
		spaceBetween: 28,
	},
	"1400": {
		slidesPerView: 7,
		spaceBetween: 28,
	},
	"1025": {
		slidesPerView: 6,
		spaceBetween: 28,
	},
	"768": {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	"500 ": {
		slidesPerView: 4,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
};

const breakpointsCircle = {
	"1720": {
		slidesPerView: 10,
		spaceBetween: 48,
	},
	"1400": {
		slidesPerView: 7,
		spaceBetween: 32,
	},
	"1025": {
		slidesPerView: 6,
		spaceBetween: 28,
	},
	"768": {
		slidesPerView: 5,
		spaceBetween: 20,
	},
	"500 ": {
		slidesPerView: 4,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 3,
		spaceBetween: 12,
	},
};

const Conceitos: React.FC<CategoriesProps> = ({
	
	type = "circle",
}) => {
	const { data, isLoading, error } = useCategoriesQuery({
		limit: 10,
	});

	return (
           <div className="bg-gray-400 w-full h-full">
			<strong className=" mx-auto bg-green-100">Conceitos em alta</strong>
			{error ? (
				<Alert message={`${error.message}Deu ruim mas nada de mostrar a msg de erro`} />
			) : (
				<Carousel
					breakpoints={type === "rounded" ? breakpoints : breakpointsCircle}
					buttonClassName="-mt-8 md:-mt-10"
				>
					{isLoading && !data
						? Array.from({ length: 10 }).map((_, idx) => {
								if (type === "rounded") {
									return (
										<SwiperSlide key={`card-rounded-${idx}`}>
											<CardRoundedLoader uniqueKey={`card-rounded-${idx}`} />
										</SwiperSlide>
									);
								}
								return (
									<SwiperSlide key={`card-circle-${idx}`}>
										<CardLoader uniqueKey={`card-circle-${idx}`} />
									</SwiperSlide>
								);
						  })
						: data?.categories?.data?.map((conceitos) => (
								<SwiperSlide key={`category--key-${conceitos.id}`}>
									<Card
										item={conceitos}
										href={`${ROUTES.Conceitos_em_alta}/${conceitos}`}
										variant={type}
										effectActive={true}
										size={type === "rounded" ? "medium" : "small"}
									/>
									<div className='bg-red-500 w-40'>asdasd</div>
								</SwiperSlide>
						  ))}
				</Carousel>
			)}
		</div>
	);
};

export default Conceitos;