import React, { useEffect } from "react";

import { useTranslation } from "next-i18next";
import SlickSlider from 'src/components/ui/range-slider'

export const PriceFilter = () => {
	const { t } = useTranslation("common");

	return (
		<div className=" block border-b border-gray-300 pb-7 mb-7">
			<div className=" flex justify-between">
				<h3 className="text-heading text-sm md:text-base font-semibold mb-7">
					{t("text-price")}
				</h3>
				<h2 className='font-semibold text-black' >R$</h2>
			</div>
			<div className="mt-2 flex flex-col space-y-4">
				<SlickSlider />
			</div>
		</div>
	);
};
