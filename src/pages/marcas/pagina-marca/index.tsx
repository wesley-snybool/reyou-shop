import { GetStaticProps } from 'next';
import Layout from "@components/layout/layout";
import Container from "@components/ui/container"
import CarrousselGallery from '../pagina-marca/carroussel-gallery'
import Search from '../../../pages/search';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const mockImgs = [
    {
        title: 'Fania',
        urlImageBrqand: '/assets/images/brands/hunter-shoes.png',
        brandDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, illum quas aperiam sint architecto deserunt vero inventore, illo consequatur earum, eius libero animi. Doloremque voluptate unde, accusantium nesciunt quisquam culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero alias blanditiis error excepturi perspiciatis, totam facere suscipit animi quod repellat voluptates sapiente exercitationem rerum. Accusantium possimus animi aliquid quaerat.',
        tags: ['Vegano', 'Salve os oceanos', 'Biodiversidade', 'Atemporal']
    }
]

export default function PageBrand() {
    return (
        <Container>
            <div className=" bg-center h-80 bg-hero bg-gray-300 p-8" />
            <div className=" flex  flex-col justify-center items-center p-8">
                {mockImgs.map((item, key) => {
                    return (
                        <>
                            <div key={`${key}--carroussel${key}`} className='flex items-center justify-between w-full gap-20'>
                                <img className="rounded-full" src={item.urlImageBrqand} alt="Logo Marca" />
                                <h3 className="text-2xl font-bold text-black" >{item.title}</h3>
                                <h3 className="text-left text-black">{item.brandDescription}</h3>
                            </div>
                            <div className=" w-full p-6 items-start gap-10 flex justify-between mb-8">
                                <div className="flex flex-col items-center justify-center">
                                    <button className=" text-white font-bold bg-black py-4 rounded-md px-12">Seguir</button>
                                    <span className="mt-4">1777 Seguidores</span>
                                </div>
                                <div className='flex gap-14'>
                                    {item.tags.map((item, key) => (
                                        <div key={`${key}--carroussel-last-div${key}`} className="text-black border border-black rounded-full py-3 px-12">{item}</div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <Search showSearchBrand={false} title={'Produtos'} />
            {/* <CarrousselGallery /> */}
        </Container>
    )
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
