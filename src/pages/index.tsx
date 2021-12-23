import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link'
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
import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { changeUser } from "src/redux/store/userSlice";
import { getDarlingMoments } from "src/redux/modules/darlings-moment/darlingsMoments";
import { getReyouFavorites } from "src/redux/modules/reyou-favorites/reYouFavorites";
import { getNews } from 'src/redux/modules/news/news';
import { getConfig } from 'src/redux/modules/config-portal/config-portal';
import { getBlogs } from 'src/redux/modules/blogs/blogs';
import { getShowCaseProducts } from 'src/redux/modules/show-case/showCase';
import { getFlipCard } from 'src/redux/modules/flip-cards/getFlipCardSlice';
import { getBrands } from 'src/redux/modules/brands/brands';
import { getBanner } from 'src/redux/modules/banners/getBannerSlice';
import { getPublicity } from 'src/redux/modules/publicity/publicitySlice';

type BlogsType = {
	image: string;
	title: string;
	text: string;
}

export default function Home() {
	const location = useRouter();
	const dispatch = useDispatch();
	const [filter, setFilter] = useState({ pc: 1, pps: 2 })


	//Recuperando os dados da Sessão queridinhos do momentos no redux
	const { isLoading, error } = useAppSelector((state) => state.getDarlingMoments)
	const data = useAppSelector((state) => state.getDarlingMoments.data)

	//Recuperando os dados da Sessão queridinhos do momentos no redux
	const { isLoading: isLoadDFavorites, error: errorFavorites } = useAppSelector((state) => state.getReyouFavorites)
	const dataFavorites = useAppSelector((state) => state.getReyouFavorites.data)

	//Recuperando os dados da Sessão Novidades na Re.You no redux
	const { isLoading: isLoadDNews, error: errorNews } = useAppSelector((state) => state.getNews)
	const dataNews = useAppSelector((state) => state.getNews.data)

	//Bsucando os dados dos FlipsCards e guardando no reduxjs
	const dataFlips = useAppSelector((state) => state.getFlipCardsData.data);
	
	const dataBlogs = useAppSelector((state) => state.getBlogs.data)

	const dataBrands = useAppSelector((state) => state.getNews?.data)

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
		dispatch(getNews())
		dispatch(getBlogs())
		dispatch(getFlipCard())
		dispatch(getBanner())
		dispatch(getPublicity())
		dispatch(getConfig())
	}, [])


	return (
		<>
			<HeroBlock />

			<Container className="px-1 md:px-0  w-full">
				<div className='flipinf flex flex-col items-center justify-center'>
					<strong className="mb-8"> Que tal associar valores às suas compras?</strong>
					<h2 className="mb-8 text-black">Comece selecionando quais causas que te movem</h2>
				</div>
				<div className="container-main-flip-card">
					{dataFlips.map((item: any, index: number) => {
						return (
							<FlipCard widthImage={item.image.desktop.width} heightImage={310} titleFlip={item.title} options={item.options} key={`${index}--flips--cards`} imageOne={item.image.desktop.url} />
						)
					})}
				</div>
			</Container>
			<div className="w-full flex justify-center p-4 mb-5">
				<button onClick={handleChangeUser} className="button-start font-bold text-black">Começar</button>
			</div>
			<Container>
				<Conceitos />
			</Container>
			<Container>
				<BannerCarouselBlock />
				<p className="text-center text-black p-12 m-0 text-2xl  font-bold">QUERIDINHOS DO MOMENTO</p>
				<BestSellerProductFeed data={data} isLoading={isLoading} error={error} />

				<Container className="mb-14">
					<p className='text-center w-full p-4 text-center text-black font-bold text-2xl'>FAVORITOS Re.You</p>
				</Container>
				<BestSellerProductFeed data={dataFavorites} isLoading={isLoadDFavorites} error={errorFavorites} />

				<BrandGridBlock dataBrands={dataBrands} sectionHeading="NOVIDADES NA Re.You" />
	
				<div className='flex items-center flex-col justify-center container-video-inst my-12 w-full mx-auto py-4 px-20 bg-gray-300 text-center'>
					<p className='text-xl font-bold text-black p-8' >QUER CONHECER A NOSSA HISTÓRIA?</p>
					<div className='my-4 w-full h-full bg-gray-200'>
						<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
							frameBorder='0'
							allow='autoplay; encrypted-media'
							allowFullScreen
							width='100%'
							height='100%'
							title='video'
						/>
					</div>
					<Link href='/sobre-nos'>
						<button className='text-black font-bold my-4 w-40 p-4 bg-gray-300  shadow-cardMoreContent rounded-full focus:outline-none hover:bg-gray-400 hover:text-white transition-all '>
							Saiba Mais
						</button>
					</Link>
				</div>
				<Container className='bg-more_content pb-16 shadow-cardMoreContent'>
					<div>
						<p className='font-bold text-black text-xl py-12 text-center'>MAIS CONTEÚDO PRA VOCÊ</p>
					</div>
					<div className='flex justify-between xs:flex-col lg:gap-10'>
						{dataBlogs.map((item: BlogsType, index) => {
							return (
								<div key={index} className=' sm:w-[150px] md:w-[280px] lg:w-[410px] bg-card_read_more pb-4 shadow-cardMoreContent card_read_more flex items-center flex-col'>
									<Image className='my-8' src={item.image} width={450} height={350} />
									<span className='uppercase text-center my-4 font-bold text-black'>{item.title}</span>
									<p className='m-4 text-center text-black'>{item.text}</p>
									<button className='text-black font-bold w-40 p-4 bg-button_read my-4 shadow-header rounded-full focus:outline-none hover:bg-gray-400 hover:text-white transition-all '>Leia Mais</button>
								</div>
							)
						})}
					</div>
				</Container>

				<Container className='bg-gray-900 shadow-cardMoreContent pb-20 my-20'>
					<div>
						<p className='font-bold text-black text-xl py-12 text-center'>Re.You na IMPRENSA</p>
					</div>
					<div className='flex gap-10'>
						<div className='w-2/6 p-12 text-black bg-card_imprensa flex items-center flex-col'>
							<span className='my-4 text-center font-bold '>22/07/2021 - Nota da Re.YOU ao GreenPeace</span>
							<p className='m-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium vel distinctio culpa aspernatur quasi. Doloremque ut nobis, optio cumque illo explicabo autem culpa facilis temporibus esse minus iure eligendi!</p>
						</div>
						<div className='w-2/6 p-12 text-center text-black  bg-card_imprensa flex items-center flex-col'>
							<span className='font-bold my-4 '>22/07/2021 - Globo reconhece Re.YOU como a plataforma de Moda Sustentável mais rentável do Brasil</span>
							<p className='m-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium vel distinctio culpa aspernatur quasi. Doloremque ut nobis, optio cumque illo explicabo autem culpa facilis temporibus esse minus iure eligendi!</p>
						</div>
						<div className=' w-2/6 p-12 text-black text-center bg-card_imprensa flex items-center flex-col'>
							<span className=' font-bold my-4 '>21/07/2021 - CNN entrevista equipe Re.YOU em noite descontraída</span>
							<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
								frameBorder='0'
								allow='autoplay; encrypted-media'
								allowFullScreen
								width='100%'
								height='100%'
								title='video'
							/>
						</div>
					</div>
				</Container>

				<DownloadApps className="mb-10" />
			</Container>
			<Container>
				{/* <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" /> */}
				{/* <Instagram /> */}
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
		[API_ENDPOINTS.BRANDS, { limit: 6 }],
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
