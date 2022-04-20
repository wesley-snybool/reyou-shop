import { CheckBox } from "@components/ui/checkbox";
import SlickLider from 'src/components/ui/range-slider'
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { getTypesItems } from "src/redux/modules/types-items/typesItems";
import { useAppSelector } from "src/redux/hooks/selectors";
import { GetStaticProps, GetServerSideProps } from "next";
import { addFilterTypeItem } from "src/redux/modules/filters/filter/filter"

type TypeItemsProps = {
	typeItems?: {
		code: string,
		name: string,
	}
}

export const FilterMaterials = () => {

	const [stateQuery, setStateQuery] = useState<string[]>([])

	const data = useAppSelector((state) => state.getTypeItems.data)

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(addFilterTypeItem(stateQuery))
	},[stateQuery]);

	const { t } = useTranslation("common");

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

	return (
		<div className="block border-b border-gray-300 pb-7 mb-7">
			<div className=" flex justify-between">
				<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
					Tipos dos Peça
				</h3>
			</div>
			<div className="mt-2 flex flex-col space-y-4">
				{data?.map((item: any, index) => (
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
