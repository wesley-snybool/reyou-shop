import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useAppDispatch } from "src/redux/store/store";
import { getBrands } from "src/redux/modules/brands/brands";
import { useBrandData } from "src/redux/hooks/brandsHooks";

export default function Brands() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { data: dataBrandsRedux, isLoading } = useBrandData();

    const [dataBrandsState, setDataBrandsState] = useState([]);

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    useEffect(() => {
        if (!dataBrandsRedux.isLoading && dataBrandsRedux) {
            setDataBrandsState(dataBrandsRedux);
        }
    }, [dataBrandsRedux]);

    return (
        <>
            <Container className="text-black p-4">
                <div className=" mx-auto p-4 mb-20 px-20">
                    <h1 className="text-black font-bold text-xl mb-8">
                        Descubra a Responsabilidade das Marcas
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                        quasi distinctio eos. Quae nulla error, facilis saepe, voluptas,
                        optio voluptates a tenetur maiores eum voluptatum amet ex ut ipsam
                        eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                        deleniti, porro voluptatem perferendis dicta excepturi earum.
                        Provident mollitia molestiae itaque quisquam quod nam officiis ex
                        libero eum assumenda. Voluptatum, nisi!
                    </p>
                </div>
                <div className="justify-between bg mb-16 mx-auto flex-wrap gap-2 flex sm:justify-center px-[100px]">
                    {dataBrandsState?.map((item: any) => {
                        return (
                            <div
                                key={`${item.uid}--container`}
                                className="flex card-brands gap-4 items-center justify-between p-2"
                            >
                                <Image
                                    className="rounded-full"
                                    width={80}
                                    height={80}
                                    src={item.image.desktop.url}
                                    alt="Logo da Marcas"
                                />
                                <div className="text-black text-center">
                                    <h3 className="font-bold">{item?.title}</h3>
                                    <h2>{item?.follower ?? "1250"} Seguidores</h2>
                                </div>
                                <a
                                    onClick={() => {
                                        router.push({
                                            pathname: `/marcas/pagina-marca/${[item.uid]}`,
                                        });
                                    }}
                                    className="bg-black text-white cursor-pointer py-4 px-8 rounded-md"
                                >
                                    Ver Produtos
                                </a>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
}

Brands.Layout = Layout;
