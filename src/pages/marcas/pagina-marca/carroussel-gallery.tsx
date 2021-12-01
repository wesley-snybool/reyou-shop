import BannerGaleryCard from "../pagina-marca/banner-gallery-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";

const datagalerySession = [
	{
		urlImgOne: '/assets/images/pagina-marca/2.png',
		urlImgTwo: '/assets/images/pagina-marca/1.png',
		urlImgThre: '/assets/images/pagina-marca/3.png',
	}
]
const breakpoints = {
	"1025": {
		slidesPerView:30,
		spaceBetween: 0,
	},
	"480": {
		slidesPerView: 30,
		spaceBetween: 0,
	},
	"0": {
		slidesPerView: 30,
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
				{datagalerySession?.map((banner: any, index) => (
					<SwiperSlide key={index}>
						<BannerGaleryCard
							key={index}
							banner={banner}
							href="/marcas"
							effectActive={true}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default CarrousselGallery;
