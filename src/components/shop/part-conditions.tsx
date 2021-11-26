import { useCategoriesQuery } from "@framework/category/get-all-categories";
import { useAppDispatch, useAppSelector } from "src/redux/hooks/selectors";
import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { addFilterStateProduct } from "src/redux/modules/filters/filter/filter";


type StateProducts = {
	code: string;
	id: number,
	name: string,
	
}

export const PartConditions = () => {
	const dispatch = useAppDispatch();

	const [stateQuery, setStateQuery] = useState<string[]>([])

	const part_condition = useAppSelector((state) => state.stateProducts.data)

	const { t } = useTranslation("common");
	const router = useRouter();
	const { pathname, query } = router;
	const { data, isLoading } = useCategoriesQuery({
		limit: 10,
	});
	const selectedCategories = query?.category
		? (query.category as string).split(",")
		: [];
	const [formState, setFormState] = React.useState<string[]>(
		selectedCategories
	);

	React.useEffect(() => {
		setFormState(selectedCategories);
	}, [query?.category]);

	useEffect(() => {
		dispatch(addFilterStateProduct(stateQuery))
	}, [stateQuery])

	if (isLoading) return <p>Loading...</p>;

	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;
		console.log(value, "Valor de value");

		let newState = [...stateQuery]

		if (newState.includes(value)) {
			newState = newState.filter(e => e !== value)
		} else {
			newState.push(value)
		}
		setStateQuery(newState);

	}
	
	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{t("text-category")}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{part_condition?.map((item: StateProducts) => {
					//console.log(item)
					return (
						<CheckBox
						key={item.id}
						label={item.name}
						name={item.name.toLowerCase()}
						checked={stateQuery.includes(item.code)}
						value={item.code}
						onChange={handleItemClick}
					/>
					)
				})}
			</div>
		</div>
	);
};
