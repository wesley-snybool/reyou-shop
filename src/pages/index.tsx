import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useWindowSize } from "@utils/use-window-size";
import { useAppDispatch } from "src/redux/store/store";
import Container from "@components/ui/container";
import BannerCarouselBlock from "@containers/banner-carousel-block";
import DownloadApps from "@components/common/download-apps";
import HeroBlock from "@containers/hero-block";
import Layout from "@components/layout/layout";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchBrands } from "@framework/brand/get-all-brands";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BrandGridBlock from "@containers/brand-grid-block";
import Conceitos from "@containers/conceitos-block";
import { useUI } from "@contexts/ui.context";

import FlipCard from "../components/common/flip-card/FlipCard";
import { useAppSelector } from "src/redux/hooks/selectors";
import { useDispatch } from "react-redux";
import { changeUser } from "src/redux/store/userSlice";
import { getDarlingMoments } from "src/redux/modules/darlings-moment/darlingsMoments";
import { getReyouFavorites } from "src/redux/modules/reyou-favorites/reYouFavorites";
import { getNews } from "src/redux/modules/news/news";
import { getConfig } from "src/redux/modules/config-portal/config-portal";
import { getBlogs } from "src/redux/modules/blogs/blogs";
import { getFlipCard } from "src/redux/modules/flip-cards/getFlipCardSlice";
import { getBanner } from "src/redux/modules/banners/getBannerSlice";
import { getPublicity } from "src/redux/modules/publicity/publicitySlice";
import { getPress } from "src/redux/modules/press/press";
import { useConfigCompany } from "src/redux/hooks/companyHooks";
import { isEmpty } from "lodash";
import { ConfigPortal } from "src/types/types";
import { useFlipCardCheck } from "src/redux/hooks/flipcardCheck";

type BlogsType = {
  image: string;
  title: string;
  text: string;
};

export default function Home() {

  const {
		openModal,
		setModalView,
	} = useUI();

  const { data: session } = useSession();
  const width = useWindowSize().width;

  const uid_fucking_face = "4875715989213444"
  const uid_fucking_goog = "111500315586803824840"

  console.log('Sessão usuário', session)
  console.log('testando ele', uid_fucking_face === session?.user_uid || uid_fucking_goog === session?.user_uid);

  const dispatch = useDispatch();
  const dispatchApp = useAppDispatch();
  const { data: dataConfigPortal }: ConfigPortal = useConfigCompany();
  const { checkListValue: dataFlipCheck } = useFlipCardCheck();

  const [darlingState, setDarlingState] = useState([]);
  const [flipCardState, setFlipCardState] = useState([]);
  const [isAllFlip, setIsAllFlip] = useState<boolean>(false);

  //Recuperando os dados da Sessão queridinhos do momentos no redux
  const { isLoading, error } = useAppSelector(
    (state) => state.getDarlingMoments
  );
  const dataDarlingMomentsRedux = useAppSelector(
    (state) => state.getDarlingMoments.data
  );

  //Recuperando os dados da Sessão queridinhos do momentos no redux
  const { isLoading: isLoadDFavorites, error: errorFavorites } = useAppSelector(
    (state) => state.getReyouFavorites
  );
  const dataFavorites = useAppSelector((state) => state.getReyouFavorites.data);

  //Buscando os dados dos FlipsCards e guardando no reduxjs
  const { data: dataFlips, isLoading: isLoadingFlipCard }: any = useAppSelector(
    (state) => state.getFlipCardsData
  );

  const { data: dataPress, isLoading: isLoadingPress } = useAppSelector(
    (state) => state.getPress
  );

  const dataBlogs = useAppSelector((state) => state.getBlogs.data);

  const dataBrands = useAppSelector((state) => state.getNews?.data);

  //Exemplo de dispatch
  const handleCheckFlip = () => {
    if (!session && isEmpty(dataFlipCheck) && isAllFlip === false) {
      setIsAllFlip(true);
    } else {
      setIsAllFlip(false);
    }
  };

  function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}

  useEffect(() => {
    //Fecth dos dados da Home
    dispatch(getDarlingMoments());
    dispatch(getReyouFavorites());
    dispatch(getNews());
    dispatch(getBlogs());
    dispatch(getFlipCard());
    dispatch(getBanner());
    dispatch(getPublicity());
  }, []);

  useEffect(() => {
    if (
      !isLoading &&
      !error.error_status &&
      dataDarlingMomentsRedux.length > 0
    ) {
      setDarlingState(dataDarlingMomentsRedux);
    }
    if (isLoadingFlipCard === "SUCCESS" && dataFlips.length > 0) {
      setFlipCardState(dataFlips);
    }
  }, [
    isLoading,
    error.error_status,
    isLoadingFlipCard,
    flipCardState,
    dataDarlingMomentsRedux,
  ]);

  useEffect(() => {
    dispatchApp(getPress());
    if (!isLoadingPress && dataPress.length > 0) {
      setDarlingState(dataPress);
    }
  }, []);

  return (
    <>
      <HeroBlock />

      <Container className="px-1 md:px-0  w-full">
        <div className="flipinf flex flex-col items-center justify-center">
          <strong className="mb-8">
            {" "}
            Que tal associar valores às suas compras?
          </strong>
          <h2 className="mb-8 text-black">
            Comece selecionando quais causas te movem
          </h2>
        </div>
        <div className="container-main-flip-card">
          {flipCardState?.map((item: any, index: number) => {
            return (
              <FlipCard
                widthImage={
                  width <= 1366 && item.image.desktop.width > 700
                    ? item.image.desktop.width - 80
                    : item.image.desktop.width
                }
                heightImage={310}
                titleFlip={item.title}
                options={item.options}
                key={`${index}--flips--cards`}
                imageOne={item.image.desktop?.url}
                isAllFlip={isAllFlip}
              />
            );
          })}
        </div>
      </Container>
      {!isAllFlip ? (
        <div className="w-full gap-5 flex justify-center p-4 my-8 mb-5">
          <button
            onClick={() => handleCheckFlip()}
            className="button-start bg-card_read_more font-bold text-black"
          >
            Começar
          </button>
        </div>
      ) : (
        <Container className="transition-transform ease-out duration-300 my-14">
          <div className=" items-center justify-center gap-5 md:w-[950px] mx-auto md:h-[230px] bg-card_read_more flex flex-col p-4 my-8 mb-5">
            <p className="font-black text-xl ">
              Personalize a sua experiência adicionando valores à sua busca{" "}
            </p>
            <span className="text-black">
              (Clique nas caixas de seleção acima e deixe seu mundo
              personalizado)
            </span>
            <button
              onClick={() => handleLogin()}
              className="button-start font-bold bg-black text-white shadow-cardMoreContent"
            >
              Concluir
            </button>
          </div>
        </Container>
      )}
      <Container>
        <Conceitos />
      </Container>
      <Container>
        <BannerCarouselBlock />
        <p className="text-center text-black p-12 m-0 text-2xl  font-bold">
          QUERIDINHOS DO MOMENTO
        </p>
        <BestSellerProductFeed
          data={darlingState}
          isLoading={isLoading}
          error={error}
        />

        <Container className="mb-14">
          <p className="text-center w-full p-4 text-center text-black font-bold text-2xl">
            FAVORITOS Re.You
          </p>
        </Container>
        <BestSellerProductFeed
          data={dataFavorites}
          isLoading={isLoadDFavorites}
          error={errorFavorites}
        />

        <BrandGridBlock
          dataBrands={dataBrands}
          sectionHeading="NOVIDADES NA Re.You"
        />

        {!isEmpty(dataConfigPortal.urlVideoInst) && (
          <div className="flex items-center flex-col justify-center container-video-inst my-12 w-full mx-auto py-4 px-20 bg-gray-300 text-center">
            <p className="text-xl font-bold text-black p-8">
              QUER CONHECER A NOSSA HISTÓRIA?
            </p>
            <div className="my-4 w-full h-full bg-gray-200">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                width="100%"
                height="100%"
                title="video"
              />
            </div>
            <Link href="/sobre-nos">
              <button className="text-black font-bold my-4 w-40 p-4 bg-gray-300  shadow-cardMoreContent rounded-full focus:outline-none hover:bg-gray-400 hover:text-white transition-all ">
                Saiba Mais
              </button>
            </Link>
          </div>
        )}
        <Container className="bg-more_content pb-16 shadow-cardMoreContent">
          <div>
            <p className="font-bold text-black text-xl py-12 text-center">
              MAIS CONTEÚDO PRA VOCÊ
            </p>
          </div>
          <div className="flex justify-between xs:flex-col lg:gap-10">
            {dataBlogs.map((item: BlogsType, index) => {
              return (
                <div
                  key={index}
                  className=" sm:w-[150px] md:w-[280px] lg:w-[410px] bg-card_read_more pb-4 shadow-cardMoreContent card_read_more flex items-center flex-col"
                >
                  <Image
                    className="my-8"
                    src={item.image}
                    width={450}
                    height={350}
                  />
                  <span className="uppercase text-center my-4 font-bold text-black">
                    {item.title}
                  </span>
                  <p className="m-4 text-center text-black">{item.text}</p>
                  <button className="text-black font-bold w-40 p-4 bg-button_read my-4 shadow-header rounded-full focus:outline-none hover:bg-gray-400 hover:text-white transition-all ">
                    Leia Mais
                  </button>
                </div>
              );
            })}
          </div>
        </Container>

        <Container className="bg-gray-900 shadow-cardMoreContent pb-20 my-20">
          <div>
            <p className="font-bold text-black text-xl py-12 text-center">
              Re.You na IMPRENSA
            </p>
          </div>
          <div className="container-cards-press flex flex-wrap gap-5">
            {dataPress.map((item: any) => {
              return (
                <>
                  <div className="cards-press p-10 bg-card_imprensa  text-black flex items-center flex-col">
                    <span className="my-4 text-center font-bold ">
                      {item.title}
                    </span>
                    <p className="m-4 text-center">{item.text}</p>
                  </div>
                  {item.sourceUrl && (
                    <div className=" w-2/6 p-12 text-black text-center bg-card_imprensa flex items-center flex-col">
                      <span className=" font-bold my-4 ">{item.title}</span>
                      <iframe
                        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        width="100%"
                        height="100%"
                        title="video"
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </Container>
        {dataConfigPortal?.app?.showAppDownload && (
          <DownloadApps className="mb-10" />
        )}
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
