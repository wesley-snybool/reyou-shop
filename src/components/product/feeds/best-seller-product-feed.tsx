import ProductsBlock from "@containers/products-block";
import { useBestSellerProductsQuery } from "@framework/product/get-all-best-seller-products";
import { useEffect } from "react";
import { useAppSelector } from "src/redux/hooks/selectors";
import { getDarlingMoments } from "src/redux/modules/darlings-moment/darlingsMoments";
import { useAppDispatch } from "src/redux/store/store";
import { useSelectDarling } from "src/redux/modules/darlings-moment/darlingsMoments"


type ErrorTypes = {
	message: string;
	error_status: boolean;
}
type BestSellerTypes = {
	data?: never[];
	isLoading?: boolean;
	error?: ErrorTypes;
}

export default function BestSellerProductFeed({ data, isLoading, error }: BestSellerTypes) {
	return (
		<ProductsBlock
			sectionHeading="text-best-sellers"
			products={data}
			loading={isLoading}
			error={error?.message}
			error_status={error?.error_status}
			uniqueKey="best-sellers"
		/>
	);
}