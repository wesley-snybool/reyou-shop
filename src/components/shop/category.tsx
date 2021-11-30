import { CheckBox } from "@components/ui/checkbox";
import { useBrandsQuery } from "@framework/brand/get-all-brands";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "src/redux/hooks/selectors";
import { addFilterCategoryProduct } from "src/redux/modules/filters/filter/filter";

export const Category = () => {

	const [stateQuery, setStateQuery] = useState<string[]>([])
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addFilterCategoryProduct(stateQuery))
	},[stateQuery])

	const dataCategory = useAppSelector((state) => state.categoryProducts.data)

	const { t } = useTranslation("common");

	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;

		console.log(value, "Valor de value");

		let newState = [...stateQuery];

		if (newState.includes(value)) {
			newState = newState.filter(e => e !== value);
		} else {
			newState.push(value);
		}
		setStateQuery(newState);

	}

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{t("text-brands")}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{dataCategory?.map((item: any, index) => (
					<CheckBox
						key={index}
						label={item.name}
						name={item.name.toLowerCase()}
						checked={stateQuery.includes(item.code)}
						value={item.code}
						onChange={handleItemClick}
					/>
				))}
			</div>
		</div>
	);
};
