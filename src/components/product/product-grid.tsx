import ProductCard from "@components/product/product-card";
import CardVitrine from '@components/product/card-vitrine'
import Button from "@components/ui/button";
import { FC, useEffect } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "src/redux/hooks/selectors";
import { Product } from 'src/framework/basic-rest/types';
import { useDispatch } from "react-redux";
import { getReyouFavorites } from "src/redux/modules/reyou-favorites/reYouFavorites";
interface ProductGridProps {
	className?: string;
}
export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getReyouFavorites())
	},[])

	const { query } = useRouter();
	const {
		isFetching: isLoading,
		isFetchingNextPage: loadingMore,
		fetchNextPage,
		hasNextPage,
		data,
		error,
	} = useProductsQuery({ limit: 10, ...query });
	if (error) return <p>{error.message}</p>;

	const { t } = useTranslation("common");

	const { isLoading: isLoadCards, error: ErrorCards } = useAppSelector((state) => state.getReyouFavorites)
	const dataCards = useAppSelector((state) => state.getReyouFavorites.data)

	return (
		<>
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{!isLoadCards && !dataCards.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					dataCards.map((product: Product, index) => {
						return (
							<CardVitrine
								key={`product--key${product.id}`}
								product={dataCards[index] as Product}
								variant="grid"
							/>
						);
					})
				)}
			</div>
			<div className="text-center pt-8 xl:pt-14">
				{hasNextPage && (
					<Button
						loading={loadingMore}
						disabled={loadingMore}
						onClick={() => fetchNextPage()}
						variant="slim"
					>
						{t("button-load-more")}
					</Button>
				)}
			</div>
		</>
	);
};
