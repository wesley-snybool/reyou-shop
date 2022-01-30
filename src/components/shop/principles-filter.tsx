import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { addFilterStateProduct, addFilterUniverse, removeFilter } from "src/redux/modules/filters/filter/filter";
import { useAppDispatch } from "src/redux/store/store";
import { useAppSelector } from "src/redux/hooks/selectors";
import { getMyUniverse } from "src/redux/modules/my-universe/myUniverse";

type TypeFilter = {
	value: string[];
}


export const PrinciplesFilter = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const filterUniverse = useAppSelector((state) => state.filters.ftr_universe);

	const [stateQuery, setStateQuery] = useState<string[]>([]);

	useEffect(() => {
		dispatch(getMyUniverse());
		dispatch(addFilterUniverse(stateQuery))
	}, [stateQuery])

	const { data, isLoading } = useAppSelector((state) => state.universe);

	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;
		let newState = [...stateQuery]

		if (newState.includes(value)) {
			newState = newState.filter(e => e !== value)
		} else {
			newState.push(value)
		}
		setStateQuery(newState);
	}

	const items = data;

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
				{'Meu universo'}
			</h3>
			<div className="mt-2 flex flex-col space-y-4">
				{items?.map((item: any, index: number) => (
					<CheckBox
						key={`${index}--check-my_universe`}
						label={item?.title}
						name={item.title}
						checked={stateQuery.includes(item.code)}
						value={item.code}
						onChange={handleItemClick}
					/>
				))}
			</div>
		</div>
	);
};
