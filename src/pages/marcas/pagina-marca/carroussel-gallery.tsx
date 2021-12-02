import BannerGaleryCard from "../pagina-marca/banner-gallery-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";

const datagalerySession = [
	{url: '/assets/images/pagina-marca/2.png'},
	{url: '/assets/images/pagina-marca/3.png'},
]
const breakpoints = {
	"1025": {
		slidesPerView:3,
		spaceBetween: 0,
	},
	"480": {
		slidesPerView: 3,
		spaceBetween: 0,
	},
	"0": {
		slidesPerView: 3,
		spaceBetween: 0,
	},
};

interface BannerProps {
	className?: string;
}

const CarrousselGallery: React.FC<BannerProps> = ({
	/* className = "mb-12 md:mb-12 lg:mb-14 pb-0.5 xl:pb-1.5", */
}) => {
	return (
		<div className='w-2/4 mx-auto'>
			<Carousel breakpoints={breakpoints} autoplay={{ delay: 5000 }}>
					<SwiperSlide >
{/* 						<BannerGaleryCard
							banner={datagalerySession}
							href="/marcas"
							effectActive={true}
						/> */}
					</SwiperSlide>
			</Carousel>
		</div>
	);
};

export default CarrousselGallery;
