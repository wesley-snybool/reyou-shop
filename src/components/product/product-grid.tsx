import CardVitrine from '@components/product/card-vitrine'
import Button from "@components/ui/button";
import { FC, useEffect, useState } from "react";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useAppSelector } from "src/redux/hooks/selectors";
import { getShowCaseProducts } from "src/redux/modules/show-case/showCase";
import { useAppDispatch } from "src/redux/store/store";
import { addCategoryFilter } from 'src/redux/modules/filters/load-more/loadMore'
import { getStateProducts } from "src/redux/modules/state-products/state_products";
import { getCategoryProducts } from "src/redux/modules/category/category_products";
import { getTypesItems } from "src/redux/modules/types-items/typesItems";

interface ProductGridProps {
	className?: string;
	hasFilter?: boolean;
	filterTitle?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {

	const dispatch = useAppDispatch();
	const loader = useAppSelector((state) => state.loadMore)
	const ftr_universe = useAppSelector((state) => state.filters.ftr_universe)
	const ftr_category = useAppSelector((state) => state.filters.ftr_category)
	const ftr_typeItem = useAppSelector((state) => state.filters.ftr_typeItem)


	const ftr_state_products = useAppSelector((state) => state.filters.ftr_state)
	
	useEffect(() => {
		dispatch(getShowCaseProducts({pps: 20, pc: 1 , ftr_universe, ftr_state_products, ftr_category, ftr_typeItem }));
		dispatch(getStateProducts());
		dispatch(getCategoryProducts());
		dispatch(getTypesItems());

	},[dispatch, loader, ftr_universe, ftr_state_products, ftr_category, ftr_typeItem]);


	const loadMore = () => {
		dispatch(addCategoryFilter(10));
	}

	const { isLoading: isLoadCards, error: errorCards } = useAppSelector((state) => state.getShowCaseProducts)
	
	const dataCards = useAppSelector((state) => state?.getShowCaseProducts.data)

	return (
		<>
			<div
				className={`w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{errorCards.error_status && !isLoadCards && !dataCards.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					dataCards.map((product: any) => {
						return (
							<CardVitrine
								key={`product--key${product.id}`}
								product={product}
								variant="grid"
							/>
						);
					})
				)}
			</div>
			<div className="text-center pt-8 xl:pt-14">
				{isLoadCards && (
					<Button
						loading={isLoadCards}
						disabled={isLoadCards}
						onClick={loadMore}
						variant="slim"
						className="rounded-full"
					>
					</Button>
				)}
			</div>
		</>
	);
};
