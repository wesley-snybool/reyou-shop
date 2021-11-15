import Card from "@components/common/card";
import SectionHeader from "@components/common/section-header";
import Carousel from "@components/ui/carousel/carousel";
import CardLoader from "@components/ui/loaders/card-loader";
import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";
import { useCategoriesQuery } from "@framework/conceitosemalta/get-all-conceitos";
import { ROUTES } from "@utils/routes";
import Alert from "@components/ui/alert";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { useAppDispatch } from "src/redux/store/store";
import { getHotConcepts } from "src/redux/modules/hot-concepts/getHotConceptsSlice";
import { useAppSelector } from "src/redux/hooks/selectors";
/* 
interface CategoriesProps {
	sectionHeading: string;
	className?: string;
	type?: "rounded" | "circle";
} */

/* type ConceptTypes = {
	id: string, 
	order: number,
	thumbnail: string,
	title: string,
} */

const breakpoints = {
	"1720": {
		slidesPerView: 5,
		spaceBetween: 28,
	},
	"1400": {
		slidesPerView: 5,
		spaceBetween: 28,
	},
	"1025": {
		slidesPerView: 5,
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
		slidesPerView: 5,
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

const Conceitos = ({type = "circle"}) => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getHotConcepts());
	},[])

	const dataConcepts = useAppSelector(state => state.getConceptsData.data);

	//dataConcepts.map(item => console.log(item));


	const { data, isLoading, error } = useCategoriesQuery({
		limit: 10,
	});

	return (
           <div className="bg-gray-300 w-full h-full flex flex-col px-8 mb-16">
			<strong className="text-black my-4 text-lg mx-auto p-4">Conceitos em alta</strong>
			{!dataConcepts ? (
				<Alert message={`${error.message}Erro ao carregar as imagens`} />
			) : (
				<Carousel
					breakpoints={type === "rounded" ? breakpoints : breakpointsCircle}
					buttonClassName="-mt-8 md:-mt-10"
				>
					{!dataConcepts
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
						: dataConcepts?.map((conceitos, index) => (
								<SwiperSlide key={`category--key-${dataConcepts.id}`}>
									<Card
										item={conceitos}
										href={conceitos.thumbnail}
										variant={type}
										effectActive={true}
										size={type === "rounded" ? "medium" : "small"}
									/>
									<div className='bg-red-500 w-40'></div>
								</SwiperSlide>
						  ))}
				</Carousel>
			)}
		</div>
	);
};

export default Conceitos;