import ProductsBlock from "@containers/products-block";
import { useAppSelector } from "src/redux/hooks/selectors";

export default function NewArrivalsProductFeed() {
	const { data, isLoading, error } = useAppSelector((state) => state.getShowCaseProducts);

	return (
		<ProductsBlock
			sectionHeading="text-new-arrivals"
			products={data as any}
			loading={isLoading}
			error={error.error_message}
			uniqueKey="new-arrivals"
			error_status={isLoading}
		/>
	);
}
