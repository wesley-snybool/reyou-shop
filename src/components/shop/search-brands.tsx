import { CheckBox } from "@components/ui/checkbox";
import SlickLider from 'src/components/ui/range-slider'
import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { getTypesItems } from "src/redux/modules/types-items/typesItems";
import { useAppSelector } from "src/redux/hooks/selectors";
import { GetStaticProps, GetServerSideProps } from "next";
import SearchBox from "@components/search-box2";
import SearchBrandBox from '@components/common/search-brand-box'
import Search from '@components/common/search'

type TypeBrandsProps = {
	uid: string;
	manufacturer: string;
}

export const SearchBrands = ({ brands }: any) => {

	const [ valueText, setValuetext ]  = useState<string>('')
	const ref = useRef<HTMLInputElement>(null);


	let arrayBrands = [];
	arrayBrands = brands;

	const filterBrands = arrayBrands.map((item: any) => item.manufacturer)

	const verifyBrand = (filterBrands: any) => {
		if	(filterBrands === 'Nike') {
			return filterBrands;
		}
	}

	const brandVerify = filterBrands.filter(verifyBrand);



	const handleChange = (value: any) => {
		setValuetext(value.target.value)
	}

	const dispatch = useDispatch();	
	useEffect(() => {

		dispatch(getTypesItems())
	},[])

	
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
		console.log(value, 'Consolou Aqui')
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
		<div className="block shadow-brands_search border-b border-gray-500 pb-7 mb-7  h-4/5">
			<div className=" flex justify-between">
				<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
					Marcas
				</h3>
			</div>
			<div className="mt-2 flex flex-col items-center w-full">
				<div className=' p-1'>
					<SearchBrandBox onSubmit={() => {}} name={valueText} value={valueText} onClear={() => setValuetext('')} onChange={handleChange}/>
				</div>
				<div className="brands-box flex flex-col w-full overflow-scroll p-4">
					{brands?.map((item: TypeBrandsProps, index: number) => {
						return (
							<span className="w-full hover:bg-gray-300  p-2 rounded-md text-black" key={index}>{item.manufacturer}</span>
						)
					})}
				</div>
			</div>
		</div>
	);
};
