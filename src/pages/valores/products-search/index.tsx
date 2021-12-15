import Container from "@components/ui/container";
import { ProductGrid } from "@components/product/product-grid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";


export default function Shop() {

	const { t } = useTranslation("common");

	return (
		<>
			<Container className="flex justify-between">
					<div className="flex flex-col">
						<ProductGrid filterTitle={'Impacto Social'} hasFilter={true}/>
					</div>
			</Container>
		</>
	);
}
