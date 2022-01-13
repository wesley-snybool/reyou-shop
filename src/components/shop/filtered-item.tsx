import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "src/redux/hooks/selectors";
import { addFilterUniverse, removeItemFilterMyUniverse } from "src/redux/modules/filters/filter/filter";

interface Props {
	itemKey: string;
	itemValue: string;
}

export const FilteredItem = ({ itemKey, itemValue }: Props) => {
	const dispatch = useAppDispatch();

	const [stateQuery, setStateQuery] = useState<string[]>([]);

/* 	useEffect(() => {
		dispatch(addFilterUniverse(stateQuery))
	}, [stateQuery]) */

	function handleClose() {
/* 		const value = itemValue;
		let newState = [...stateQuery]

		if (newState.includes(value)) {
			newState = newState.filter(e => e !== value)
		} else {
			newState.push(value)
		}
		setStateQuery(newState); */
	}
	return (
		<div
			className="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
			onClick={handleClose}
		>
			{itemValue}
			<IoClose className="text-sm text-body ms-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" />
		</div>
	);
};
function dispatch(arg0: any) {
	throw new Error("Function not implemented.");
}

