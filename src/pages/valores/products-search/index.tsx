import Container from "@components/ui/container";
import { ProductGrid } from "@components/product/product-grid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";


export default function Shop() {

	const { t } = useTranslation("common");

	return (
		<>
			<Container className=" flex justify-between">
				<div className={`flex pt-8 pb-16 lg:pb-20`}>
					<div className=" pe-24 hidden">
				
					</div>
					<div className="w-full ">
						<ProductGrid filterTitle={'Impacto Social'} hasFilter={true}/>
					</div>
				</div>
			</Container>
		</>
	);
}
