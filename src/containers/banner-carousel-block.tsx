import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import { promotionBannerTwo as banners } from "@framework/static/banner"
import { useAppSelector } from "src/redux/hooks/selectors";
import { TypeBannerHome } from '../framework/basic-rest/types'

const breakpoints = {
	"1025": {
		slidesPerView: 3,
		spaceBetween: 28,
	},
	"480": {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

interface BannerProps {
	className?: string;
}

const BannerCarouselBlock: React.FC<BannerProps> = ({
	/* className = "mb-12 md:mb-12 lg:mb-14 pb-0.5 xl:pb-1.5", */
}) => {

	const dataPublicity = useAppSelector((state) => state.getPublicity.data);

	return (
		<div className='bannercarousel'>
			<Carousel breakpoints={breakpoints} autoplay={{ delay: 5000 }}>
				{dataPublicity?.map((banner: TypeBannerHome) => (
					<SwiperSlide key={`promotion-banner-key-${banner?.id}`}>
						<BannerCard
							width={438}
							height={268}
							banner={banner}
							effectActive={true}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default BannerCarouselBlock;
