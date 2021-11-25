import { usePrinciplesQuery } from "@framework/principles/get-all-principles";
import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { addFilter, removeFilter } from "src/redux/modules/filters/filter/filter";
import { useAppDispatch } from "src/redux/store/store";
import { useAppSelector } from "src/redux/hooks/selectors";

type TypeFilter = {
	value: string[];
}


export const PrinciplesFilter = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const filterUniverse = useAppSelector((state) => state.filters.ftr_universe)

	const { pathname, query } = router;

	const [stateQuery, setStateQuery] = useState<string[]>([])

	let prepare: string[];

	useEffect(() => {
		dispatch(addFilter(stateQuery))
	},[stateQuery])



	const { t } = useTranslation("common");


	const { data, isLoading } = usePrinciplesQuery({
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

	if (isLoading) return <p>Loading...</p>;

	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;
		let newState = [...stateQuery]

		if (newState.includes(value)) {
			newState = newState.filter(e => e !== value)
		} else {
			newState.push(value)
		}

		console.log(newState, 'New State');
		setStateQuery(newState);
	}


	const items = data?.categories.data;

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{t("text-principles")}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{items?.map((item: any) => (
					<CheckBox
						key={item.id}
						label={item.name}
						name={''}
						checked={filterUniverse === item.slug}
						value={item.slug}
						onChange={handleItemClick}
					/>
				))}
			</div>
		</div>
	);
};
