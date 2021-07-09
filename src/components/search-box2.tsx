import SearchIcon from "@components/icons/search-icon";
import React from "react";
import { useTranslation } from "next-i18next";
import { IoCloseOutline } from "react-icons/io5";

type SearchProps = {
	className?: string;
	onSubmit: (e: React.SyntheticEvent) => void;
	onClear: (e: React.SyntheticEvent) => void;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	name: string;
	value: string;
};

const SearchBox = React.forwardRef<HTMLInputElement, SearchProps>(
	({ className, onSubmit, onClear, ...rest }, ref) => {
		const { t } = useTranslation("forms");
		return (
			<form
				className="relative pe-12 md:pe-14 bg-white overflow-hidden rounded-md w-full"
				noValidate
				role="search"
				onSubmit={onSubmit}
			>
				<label htmlFor="search" className="flex items-center py-0.5">
					<span className="w-12 md:w-14 h-full flex flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
						<SearchIcon color="text-heading" className="w-4 h-4" />
					</span>
					<input
						id="search"
						className="text-heading outline-none w-full h-12 lg:h-14 placeholder-gray-400 text-sm lg:text-base"
						placeholder={t("placeholder-search")}
						aria-label="Busca"
						autoComplete="off"
						ref={ref}
						{...rest}
					/>
				</label>
			
			</form>
		);
	}
);

export default SearchBox;
