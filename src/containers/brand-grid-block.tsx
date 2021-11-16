import BrandCard from "@components/common/brand-card";
import SectionHeader from "@components/common/section-header";
import BrandCardLoader from "@components/ui/loaders/brand-card-loader";
import { useBrandsQuery } from "@framework/brand/get-all-brands";
import Alert from "@components/ui/alert";
import { useAppSelector } from "src/redux/hooks/selectors";
import { useEffect } from "react";

interface BrandProps {
	sectionHeading: string;
	className?: string;
}

type BrandsProps = {
	data: never[];
}

const BrandGridBlock: React.FC<BrandProps> = ({
	className = "my-20 md:mb-8 xl:mb-8",
	sectionHeading,
}) => {

/* 	const { data, isLoading, error } = useBrandsQuery({
		limit: 6,
	});
	const brands = data?.brandsGrid; */

	const { isLoading, error, data } = useAppSelector((state) => state.getNews)
	const brands = data

	return (
		<div className={className}>
			<SectionHeader className={className} sectionHeading={sectionHeading} />
			{error.error_status ? (
				<Alert message={error?.message} />
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
					{isLoading
						? Array.from({ length: 6 }).map((_, idx) => (
								<BrandCardLoader key={idx} uniqueKey={`top-brand-${idx}`} />
						  ))
						: brands?.map((brand, id) => (
								<BrandCard key={`brand--key${id}`} brand={brand} />
						  ))}
				</div>
			)}
		</div>
	);
};

export default BrandGridBlock;
