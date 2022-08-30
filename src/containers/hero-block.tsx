import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { homeOneHeroBanner as banners } from "@framework/static/banner";
import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";
import { useAppSelector } from "src/redux/hooks/selectors";
import { TypeBannerHome } from '../../src/framework/basic-rest/types'
import { useEffect, useState } from "react";
import { getProducts } from "src/pages/api/products";

const breakpoints = {
	"2000": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

const HeroBlock: React.FC = (props) => {
	const [dataBannerState, setDataBannerState] = useState([]);
	const { data: dataBannersRedux, isLoading } = useAppSelector((state) => state.getBanner)
	const [dadosCar, setDAdosCar] = useState<any>([])

	useEffect(() => {
		if (!isLoading && dataBannersRedux.length > 0) {
			setDataBannerState(dataBannersRedux);
		}
	}, [dataBannersRedux]);

	const { width } = useWindowSize();

	useEffect(() => {		
		getProducts({per_page: 3, query: 'products'}).then((res) => setDAdosCar(res));
	},[])

	console.log(props)


	return (
		<div className="heroBannerOne relative max-w-[1920px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-2">
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={width < 1500 ? false : true}
				autoplay={{ delay: 2000 }}
				className="mx-0"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{dadosCar?.map((banner: TypeBannerHome) => (
					<SwiperSlide
						className="carouselItem px-0 2xl:px-3.5 bg-blue-500"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							key={`${banner?.id}--banner--key-${banner?.id}`}
							width={1419}
							height={450}
							banner={banner}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;

export const getServerSideProps = async () => {
	const data = getProducts({per_page: 10, query: 'cars'}).then((res) => {
		console.log(res);
	});

	console.log(data, 'dados server side');

	return {
    props: { data: data }, // will be passed to the page component as props
  };
};