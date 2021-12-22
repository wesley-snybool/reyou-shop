import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { homeOneHeroBanner as banners } from "@framework/static/banner";
import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";
import { useAppSelector } from "src/redux/hooks/selectors";
import { TypeBannerHome } from '../../src/framework/basic-rest/types'

const breakpoints = {
	"1500": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

const HeroBlock: React.FC = () => {

const dataBanners = useAppSelector((state) => state.getBanner.data)

	const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative max-w-[1920px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-2">
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={width < 1500 ? false : true}
				autoplay={{ delay: 5000 }}
				className="mx-0"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{dataBanners?.map((banner: TypeBannerHome) => (
					<SwiperSlide
						className="carouselItem px-0 2xl:px-3.5"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							width={1419}
							height={616}
							banner={banner}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;
