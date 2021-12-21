import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { addFilterBrand } from '../../redux/modules/filters/filter/filter'
import { getTypesItems } from "src/redux/modules/types-items/typesItems";
import { useAppSelector } from "src/redux/hooks/selectors";
import SearchBrandBox from '@components/common/search-brand-box'
import { getShowCaseProducts } from "src/redux/modules/show-case/showCase";
import { useAppDispatch } from "src/redux/store/store";

type TypeBrandsProps = {
	uid: string;
	manufacturer: string;
	title: string;
	name?: string;
}

type TypesBrand = {
	brands?: any;
	showSearchBrand?: boolean;
}

export const SearchMaterials: FC<TypesBrand> = ({ brands, showSearchBrand }) => {
	const [filterBrand, setFilterBrand] = useState<string[]>([]);

	useEffect(() => {
		dispatch(addFilterBrand(filterBrand))
		
	},[filterBrand])

	const handleAddFilterBrand = (uid: string) => {
		let newState = [...filterBrand];
		newState.push(uid);

		setFilterBrand(newState);
	}

	const [valueText, setValuetext] = useState<string>('')

	const ref = useRef<HTMLInputElement>(null);


	let arrayBrands = [];
	arrayBrands = brands;

	const filterBrands = arrayBrands.map((item: any) => item.title);

	const handleChange = (value: any) => {
		setValuetext(value.target.value)
	}

	const dispatch = useAppDispatch();

	useEffect(() => {

		dispatch(getTypesItems())
	}, [])


	const { t } = useTranslation("common");
	const router = useRouter();
	const { pathname, query } = router;
	const selectedPrices = query?.price ? (query.price as string).split(",") : [];
	const [formState, setFormState] = React.useState<string[]>(selectedPrices);
	React.useEffect(() => {
		setFormState(selectedPrices);
	}, [query?.price]);
	function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
		const { value } = e.currentTarget;

		let currentFormState = formState.includes(value)
			? formState.filter((i) => i !== value)
			: [...formState, value];
		// setFormState(currentFormState);
		const { price, ...restQuery } = query;
		router.push(
			{
				pathname,
				query: {
					...restQuery,
					...(!!currentFormState.length
						? { price: currentFormState.join(",") }
						: {}),
				},
			},
			undefined,
			{ scroll: false }
		);
	}


	const data = useAppSelector((state) => state.getTypeItems.data)

	return (
		<>
			{showSearchBrand && (
				<div className=" block shadow-searchs border-b border-gray-500 pb-7 mb-7  h-4/5">
					<div className=" flex justify-between">
						<h3 className="text-heading px-4 text-sm md:text-base font-semibold mb-7">
							Materiais
						</h3>
					</div>
					<div className="mt-2 flex flex-col items-center w-full">
						<div className='p-4'>
							<SearchBrandBox place='Pesquisar Materiais' onSubmit={() => { }} name={valueText} value={valueText} onClear={() => setValuetext('')} onChange={handleChange} />
						</div>
						<div className="brands-box flex flex-col w-full overflow-scroll p-4">
							{brands?.map((item: TypeBrandsProps, uid: string) => {
								return (
									<span onClick={() => handleAddFilterBrand(item.uid)} className="w-full hover:bg-gray-300  p-2 rounded-md text-black" key={uid}>{item.name}</span>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
