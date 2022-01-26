import Link from "next/link";
import Image from "next/image";
import { BrandReyou } from "@framework/types";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BrandCard: React.FC<{ brand: BrandReyou }> = ({ brand }) => {
	const { action, title, image } = brand;
	const router = useRouter();

	const handleClickBrand = () => {
		router.push({
			pathname: `/marcas/pagina-marca/${[brand.uid]}`,
		});
	}

	const { t } = useTranslation("common");
	
	return (
			<div onClick={handleClickBrand}className="bg-red-500 group cursor-pointer flex justify-center text-center relative overflow-hidden rounded-md">
				<Image
					src={image?.desktop?.url || '/'}
					alt={title || t("text-brand-thumbnail")}
					width={650}
					height={650}
					className="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
				/>
				<div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
				<div className="absolute top left h-full w-full flex items-center justify-center p-8">
					{/*	<img
						src={image.mobile.url}
						alt={title || t("text-brand-thumbnail")}
						className="flex-shrink-0"
					/> */}
				</div>
			</div>
	);
};

export default BrandCard;
