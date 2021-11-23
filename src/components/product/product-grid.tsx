import ProductCard from "@components/product/product-card";
import CardVitrine from '@components/product/card-vitrine'
import Button from "@components/ui/button";
import { FC, useEffect, useState } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "src/redux/hooks/selectors";
import { Product } from 'src/framework/basic-rest/types';
import { useDispatch } from "react-redux";
import { getShowCaseProducts } from "src/redux/modules/show-case/showCase";
import { useAppDispatch } from "src/redux/store/store";
import { addCategoryFilter } from 'src/redux/modules/filters/category-filters/categorySlice'

interface ProductGridProps {
	className?: string;
	hasFilter?: boolean;
	filterTitle?: string;
}
export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {

	const dispatch = useAppDispatch();
	const loader = useAppSelector((state) => state.filterCategory)

	
	useEffect(() => {
		dispatch(getShowCaseProducts({pps: loader}));
	},[dispatch, loader,])


	const loadMore = () => {
		dispatch(addCategoryFilter(5));
	}


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

	const { isLoading: isLoadCards, error: errorCards } = useAppSelector((state) => state.getShowCaseProducts)
	
	const dataCards = useAppSelector((state) => state?.getShowCaseProducts.data)

	return (
		<>
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{errorCards.error_status && !isLoadCards && !dataCards.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					dataCards.map((product, index) => {
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
						onClick={loadMore}
						variant="slim"
					>
						{t("button-load-more")}
					</Button>
				)}
			</div>
		</>
	);
};
