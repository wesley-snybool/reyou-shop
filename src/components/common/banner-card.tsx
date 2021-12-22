import Link from "@components/ui/link";
import Image from "next/image";
import type { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import cn from "classnames";
import { TypeBannerHome } from '../../framework/basic-rest/types'

interface BannerProps {
	banner: TypeBannerHome;
	variant?: "rounded" | "default";
	effectActive?: boolean;
	className?: string;
	classNameInner?: string;
	width: number;
	height: number;
}

function getImage(deviceWidth: number, imgObj: any) {
	return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

const BannerCard: FC<BannerProps> = ({
	banner,
	className,
	variant = "rounded",
	effectActive = false,
	classNameInner,
	width,
	height,
}) => {

	const { title, image } = banner;
	return (
		<div className={cn("mx-auto", className)}>
			<Link
				href={'/'}
				className={cn(
					"h-full group flex justify-center relative overflow-hidden",
					classNameInner
				)}
			>
				<Image
					src={image?.desktop?.url || '/'}
					width={width}
					height={height}
					alt={title}
					quality={100}
					className={cn("bg-gray-300 md:mx-8 object-cover w-full", {
						"rounded-md": variant === "rounded",
					})}
				/>
				{effectActive && (
					<div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
				)}
			</Link>
		</div>
	);
};

export default BannerCard;
