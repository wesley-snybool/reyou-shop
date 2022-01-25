import { GetStaticProps } from "next";
import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import CarrousselGallery from "./carroussel-gallery";
import Search from "../../search";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useBrandData } from "src/redux/hooks/brandsHooks";
import { useRouter } from "next/router";
import { BrandsTypes } from "src/types/types";

export default function PageBrand() {
  const { query } = useRouter();
  const { data: dataBrandsRedux, isLoading } = useBrandData();
  const [brandState, setBrandState] = useState<BrandsTypes>();
  const uidBrand = query.uid;

  useEffect(() => {
    if (!isLoading && dataBrandsRedux) {
      setBrandState(dataBrandsRedux.filter((item: BrandsTypes) => item.uid === uidBrand)[0]);
    }
  }, [dataBrandsRedux, brandState]);

  return (
    <Container>
      <div className=" bg-center h-80 bg-hero bg-gray-300 p-8" />
      <div className=" flex  flex-col justify-center items-center p-8">
        <>
          <div className="grid grid-cols-2 mx-auto w-full">
            <div className="flex gap-5">
                <div className=' flex flex-col gap-5 items-center'>
                    <img
                        className="rounded-full w-40"
                        src={brandState?.image.desktop.url}
                        alt="Logo Marca"
                        />
                    <button className="text-white font-bold bg-black py-4 rounded-md px-12">
                        Seguir
                    </button>
                    <span className="">1777 Seguidores</span>
                </div>
                <div className="px-16 py-16">
                    <h3 className="text-[40px] text-center font-extrabold  text-black">
                        {brandState?.title}
                    </h3>
                </div>
            </div>
            <div className="bg-gray-200 flex items-center">
                <h3 className="text-center text-black ">
                {brandState?.brandDescription ?? "Descrição da marca está ausente"}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laboriosam cumque. Voluptas ad aperiam nostrum distinctio alias recusandae ea porro accusamus modi repellat, magnam aut quae nesciunt incidunt, deserunt atque.
                </h3>
            </div>
          </div>
          <div className=" w-full py-6 items-start gap-10 flex justify-between mb-8">

            <div className="flex gap-14">
{/*               {brandState?.tags.map((item: any) => (
                <div
                  key={`${item.uid}--carroussel-last-div${item.uid}`}
                  className="text-black border border-black rounded-full py-3 px-12"
                >
                  {item}
                </div>
              ))} */}
            </div>
          </div>
        </>
      </div>
      <Search showSearchBrand={false} title={"Produtos"} />
      {/* <CarrousselGallery /> */}
    </Container>
  );
}

PageBrand.Layout = Layout;

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
