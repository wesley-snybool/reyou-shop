import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "@components/ui/carousel/carousel";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { Product } from "@framework/types";
import Alert from "@components/ui/alert";
import CardQueridinhos from "@components/product/card-queridinhos";

interface ProductsProps {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	products?: Product[];
	loading?: boolean;
	errorMessage?: string;
	error?: string;
	uniqueKey?: string;
	error_status?: boolean;
}

const ProductsBlock: React.FC<ProductsProps> = ({
	/* 	sectionHeading,
		categorySlug, */
	className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12",
	products,
	loading,
	error_status,
	errorMessage,
	uniqueKey,
}) => {

	const breakpoints = {
		"1720": {
			slidesPerView: 8,
			spaceBetween: 28,
		},
		"1400": {
			slidesPerView: 4,
			spaceBetween: 28,
		},
		"1025": {
			slidesPerView: 4,
			spaceBetween: 28,
		},
		"768": {
			slidesPerView: 4,
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

	return (
		<div className={className}>
			<Carousel breakpoints={breakpoints} >
				{false ? (
					<Alert message={errorMessage} />
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
						{loading && !products?.length ? (
							<ProductFeedLoader limit={5} uniqueKey={uniqueKey} />
						) : (
							products?.map((product: Product) => {
								console.log('product queridinhos', product, error_status);
								return (
									<SwiperSlide key={`${product.uid}-productsBlock-${product.uid}`}>
										<CardQueridinhos
											key={`product--key${product.uid}`}
											product={product}
											imgWidth={340}
											imgHeight={440}
											variant="grid"
										/>
									</SwiperSlide>
								)
							})
						)}
					</div>
				)}
			</Carousel>
		</div>
	);
};

export default ProductsBlock;
