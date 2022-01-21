import ProductsBlock from "@containers/products-block";

type ErrorTypes = {
	error_status: boolean,
	error_message: string,
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
			error={error?.error_message}
			error_status={error?.error_status}
			uniqueKey="best-sellers"
		/>
	);
}