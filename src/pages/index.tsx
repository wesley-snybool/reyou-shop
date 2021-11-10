import Container from "@components/ui/container";
import BannerCarouselBlock from "@containers/banner-carousel-block";
import DownloadApps from "@components/common/download-apps";
import Subscription from "@components/common/subscription";
import HeroBlock from "@containers/hero-block";
import Layout from "@components/layout/layout";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchBestSellerProducts } from "@framework/product/get-all-best-seller-products";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import CategoryBlock from "@containers/category-block";
import CategoryGridBlock from "@containers/category-grid-block";
import BrandGridBlock from "@containers/brand-grid-block";
import BannerWithProducts from "@containers/banner-with-products";
import Instagram from "@components/common/instagram";
import Conceitos from "@containers/conceitos-block";
import { homeThreeMasonryBanner as img_flipscards } from "@framework/static/banner";

import FlipCard from "../components/common/flip-card/FlipCard";
import { useAppSelector } from "src/redux/hooks/selectors";
import { useAppDispatch } from "src/redux/store/store";
import { useSelectDarling } from "src/redux/modules/darlings-moment/darlingsMoments"
import { useDispatch } from "react-redux";
import { changeUser } from "src/redux/store/userSlice";
import { getDarlingMoments } from "src/redux/modules/darlings-moment/darlingsMoments";
import { getReyouFavorites } from "src/redux/modules/reyou-favorites/reYouFavorites";


export default function Home() {
	const dispatch = useDispatch();

	//Recuperando os dados da Sesão queridinhos do momentos no redux
	const { isLoading, error } =  useAppSelector((state) => state.getDarlingMoments)
	const data = useAppSelector((state) => state.getDarlingMoments.data)

		//Recuperando os dados da Sesão queridinhos do momentos no redux
		const { isLoading: isLoadDFavorites, error: errorFavorites } =  useAppSelector((state) => state.getReyouFavorites)
		const dataFavorites = useAppSelector((state) => state.getDarlingMoments.data)

	//Exemplo de dispatch
	const handleChangeUser = () => {
		const data = {
			nome: 'Wesley',
			logado: true
		}
		dispatch(changeUser(data.nome))
	}
	
	useEffect(() => {
		//Fecth dos dados da Home
		dispatch(getDarlingMoments());
		dispatch(getReyouFavorites());
	},[])


	return (
		<>
			<HeroBlock />

			<Container className="px-1 md:px-0  w-full">
				<div className='flipinf flex flex-col items-center justify-center'>
					<strong className="mb-8"> Que tal associar valores às suas compras?</strong>
					<h2 className="mb-8">Comece selecionando quais causas que te movem</h2>
				</div>
				<div className="container-main-flip-card ">
					<div className="itemFirstLineOne"><FlipCard imageOne={img_flipscards[0].image.desktop.url} imageTwo={img_flipscards[0].image.desktop.url} /></div>
					<div className="itemFirstLineTwo"><FlipCard heightImage={465} imageOne={img_flipscards[2].image.desktop.url} imageTwo={img_flipscards[2].image.desktop.url} /></div>
				</div>
				<div className="container-main-flip-card-inter-Grid">
					<div className="itemLastLineOne"><FlipCard heightImage={865} imageOne={img_flipscards[1].image.desktop.url} imageTwo={img_flipscards[1].image.desktop.url} /></div>
					<div className="itemLastLineTwo"><FlipCard heightImage={865} imageOne={img_flipscards[3].image.desktop.url} imageTwo={img_flipscards[1].image.desktop.url} /></div>
					<div className="itemLastLineThre"><FlipCard heightImage={435} imageOne={img_flipscards[5].image.desktop.url} imageTwo={img_flipscards[1].image.desktop.url} /></div>
				</div>
			</Container>
			<div className="w-full flex justify-center p-4 mb-5">
				<button onClick={handleChangeUser} className=" button-start">Começar</button>
			</div>
			<Conceitos /* sectionHeading="text-shop-by-category" */ />
			<Container>
				<BannerCarouselBlock />
			<p className="text-center p-12 m-0 text-2xl  font-bold">Queridinhos do Momento</p>
				<BestSellerProductFeed data={data} isLoading={isLoading} error={error} />

			<p className='text-center p-8 font-black text-2xl'>Favoritos Rey.You</p>
				<BestSellerProductFeed data={dataFavorites} isLoading={isLoadDFavorites} error={errorFavorites}/>

				<BrandGridBlock sectionHeading="text-top-brands" />
				<BannerWithProducts
					sectionHeading="text-on-selling-products"
					categorySlug="/search"
				/>
				<DownloadApps />
			</Container>
			<Container>
				<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
				<Instagram />
			</Container>



		</>
	);
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(
		[API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
		fetchFlashSaleProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.CATEGORIES, { limit: 10 }],
		fetchCategories
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.BEST_SELLER_PRODUCTS, { limit: 10 }],
		fetchBestSellerProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
		fetchNewArrivalProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.BRANDS, { limit: 0 }],
		fetchBrands
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
		revalidate: 60,
	};
};
