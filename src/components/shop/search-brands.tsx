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
}

type TypesBrand = {
	brands?: any;
	showSearchBrand?: boolean;
}

export const SearchBrands: FC<TypesBrand> = ({ brands, showSearchBrand }) => {
	const [filterBrand, setFilterBrand] = useState<string>('');
	
	const [textInputBrand, setTextInputBrand] = useState<string>('')

	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		dispatch(getShowCaseProducts({ ftr_brand: filterBrand }));
		console.log(filterBrand)
	},[filterBrand])

	useEffect(() => {},[textInputBrand])

	const handleAddFilterBrand = (uid: string, item: string) => {
		setFilterBrand(uid);
		setTextInputBrand(item);
		console.log(uid, item);
	}

	const handleChange = (value: any) => {
		setTextInputBrand(value.target.value)
	}

	const handleSubmitBrand = () => {
		dispatch(addFilterBrand(filterBrand))
	}

	const handleOnClear = () => {
		setTextInputBrand('');
		setFilterBrand('');
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
	}

	return (
		<>
			{showSearchBrand && (
				<div className=" mb-20 block shadow-searchs border-b border-gray-500 pb-7 mb-7  h-4/5">
					<div className=" flex justify-between">
						<h3 className="text-heading px-4 text-sm md:text-base font-semibold mb-7">
							Marcas
						</h3>
					</div>
					<div className=" flex flex-col items-center w-full">
						<div className='mb-8 p-1'>
							<SearchBrandBox place={'Pesquisar Marcas'} onSubmit={handleSubmitBrand} name={textInputBrand} value={textInputBrand} onClear={handleOnClear} onChange={handleChange} />
						</div>
						<div className="brands-box flex flex-col w-full overflow-scroll p-4">
							{brands?.map((item: TypeBrandsProps, uid: string) => {
								return (
									<span onClick={() => handleAddFilterBrand(item.uid, item.title)} className="w-full hover:bg-gray-300  p-2 rounded-md text-black" key={uid}>{item.title}</span>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
