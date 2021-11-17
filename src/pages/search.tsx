import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ShopDiscount from "@components/shop/discount";
import { ShopFilters } from "@components/shop/filters";
import StickyBox from "react-sticky-box";
import { ProductGrid } from "@components/product/product-grid";
import SearchTopBar from "@components/shop/top-bar";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { homeThreeMasonryBanner as masonryBanner } from "@framework/static/banner";
import { homeThreeBanner as banner } from "@framework/static/banner";
import BannerBlock from "@containers/banner-block";
import Search from "@components/common/search";
import Text from "@components/ui/text";


export default function Shop() {
	const { t } = useTranslation("common");

	return (
		<>
			<Container>
				<div className={`flex pt-8 pb-16 lg:pb-20`}>
					<div className="flex-shrink-0 pe-24 hidden lg:block w-96">
						<StickyBox offsetTop={50} offsetBottom={20}>
							<div className="pb-7">
								<BreadcrumbItems separator="/">
									<ActiveLink
										href={"/"}
										activeClassName="font-semibold text-heading"
									>
										<a>{t("breadcrumb-home")}</a>
									</ActiveLink>
									<ActiveLink
										href={ROUTES.SEARCH}
										activeClassName="font-semibold text-heading"
									>
										<a className="capitalize">{t("breadcrumb-search")}</a>
									</ActiveLink>
								</BreadcrumbItems>
							</div>
							<ShopFilters />
						</StickyBox>
					</div>

					<div className="w-full lg:-ms-9 ">
						<Text variant="subHeading" className="font-bold w-full justify-center items-center flex p-4 ">
							VITRINE
						</Text>

						<SearchTopBar />
						<ProductGrid />
					</div>
				</div>
			</Container>
		</>
	);
}

Shop.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
