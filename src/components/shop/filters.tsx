import { useEffect, useState } from "react";
import { PartConditions } from "./part-conditions";
import { PrinciplesFilter } from "./principles-filter";
import { Category } from "./category";
import { TypeItems } from "./types-items"
import { FilteredItem } from "./filtered-item";
import { ColorFilter } from "./color-filter";
import { PriceFilter } from "./price-filter";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { useTranslation } from "next-i18next";
import { SearchBrands } from "./search-brands";
import SearchBox from 'src/components/search-box2'
import { useAppSelector } from "src/redux/hooks/selectors";
import { useAppDispatch } from "src/redux/store/store";

type TypeBrandsProps = {
	showSearchBrand?: boolean;
}


export const ShopFilters: React.FC<TypeBrandsProps> = ({ showSearchBrand }) => {
	const dispatch = useAppDispatch();
	
	const data = useAppSelector((state) => state.getShowCaseProducts.data)
	
	const valueSearch = useAppSelector((state) => state.filters.ftr_universe)
	const valueSearchSplit = valueSearch?.map((item) => item.split('-'));
	console.log(valueSearchSplit, 'Removendo o hífen');
	
	useEffect(() => {
	
	},[valueSearch])

	const router = useRouter();

	const { pathname, query } = router;

	const { t } = useTranslation("common");

	return (
		<div className="pt-1">
			<div className="block border-b border-gray-300 pb-7 mb-7">
				<div className="flex items-center justify-between mb-2.5">
					<h2 className="font-semibold text-heading text-md md:text-md">
						{t("text-filters")}
					</h2>
					<button
						className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
						aria-label="Clear All"
						onClick={() => {
							router.push(pathname);
						}}
					>
						{t("text-clear-all")}
					</button>
				</div>
				<div className="flex flex-wrap -m-1.5 pt-2">
					{valueSearchSplit?.map((item: any, index: number) => {

						return (
							<FilteredItem
								itemKey={`${item}--valueSearchkey`}
								itemValue={`${item }`}
								key={`${item}--valueSearchkey`}
							/>
						)
					})}
				</div>
			</div>

			<PrinciplesFilter />
			<PriceFilter />
			<PartConditions />
			<Category />
			<TypeItems />
			<SearchBrands showSearchBrand={showSearchBrand} brands={data} />
			{/* <ColorFilter /> */}
		</div>
	);
};
