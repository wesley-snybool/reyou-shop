import cn from "classnames";
import Image from "next/image";
import type { FC } from "react";
import { useUI } from "@contexts/ui.context";
import { Product } from "@framework/types";

interface ProductProps {
	product: Product;
	className?: string;
	contactClassName?: string;
	imageContentClassName?: string;
	variant?: "grid" | "gridSlim" | "list" | "listSmall";
	imgWidth?: number | string;
	imgHeight?: number | string;
	imgLoading?: "eager" | "lazy";
	state?: string;
}

const CardQueridinhos: FC<ProductProps> = ({
	product,
	className = "",
	contactClassName = "",
	imageContentClassName = "",
	variant = "list",
	imgWidth = 340,
	imgHeight = 440,
	imgLoading,
}) => {

	const { openModal, setModalView, setModalData } = useUI();
	const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;

	function handlePopupView() {
		setModalData({ data: product });
		setModalView("PRODUCT_VIEW");
		return openModal();
	}
	return (
		<div
			className={cn(
				"group box-border overflow-hidden flex rounded-md cursor-pointer",
				{
					"pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product":
						variant === "grid",
					"pe-0 md:pb-1 flex-col items-start bg-white": variant === "gridSlim",
					"items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
						variant === "listSmall",
					"flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
						variant === "list",
				},
				className
			)}
			onClick={handlePopupView}
			role="button"
			title={product?.productName}
		>
			<div
				className={cn(
					"flex",
					{
						"mb-3 md:mb-3.5": variant === "grid",
						"mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
						"flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
							variant === "listSmall",
					},
					imageContentClassName
				)}
			>
				<Image
					src={product.imageThumb.url ?? placeholderImage}
					width={imgWidth}
					height={imgHeight}
					loading={imgLoading}
					quality={100}
					alt={product?.productName || "Product Image"}
					className={cn("bg-gray-300 object-cover rounded-s-md", {
						"w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none":
							variant === "grid",
						"rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
							variant === "gridSlim",
						"rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
							variant === "list",
					})}
				/>
			</div>
			<div
				className={cn(
					"w-full overflow-hidden",
					{
						"ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4": variant === "grid",
						"ps-0": variant === "gridSlim",
						"px-4 lg:px-5 2xl:px-4": variant === "listSmall",
					},
					contactClassName
				)}
			>
				<h2
					className={cn("text-heading font-semibold truncate mb-1", {
						"text-sm md:text-base": variant === "grid",
						"md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
							variant === "gridSlim",
						"text-sm sm:text-base md:mb-1.5 pb-0": variant === "listSmall",
						"text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5":
							variant === "list",
					})}
				>
					{product?.productName}
				</h2>
				{product?.shortDescription && (
					<p className="text-black text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
						{product?.shortDescription}
					</p>
				)}
				<div
					className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 ${variant === "grid"
						? "lg:text-lg lg:mt-2.5"
						: "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"
						}`}
				>
					<span className="inline-block">R$ {product.price}</span>
					{product.discount && (
						<del className="sm:text-base font-normal text-gray-800">
							{product.discount}
						</del>
					)}
				</div>
				<div className="text-black my-4 w-16 border rounded-full  px-16 border-black py-2 flex align-center justify-center">{product.stateProduct || product.state}</div>
				<div className='mb-4 text-black' >Marca: {product.manufacturer}</div>
				<div className=' text-black'>Vendido por {product.brand?.title}</div>
			</div>
		</div>
	);
};

export default CardQueridinhos;
