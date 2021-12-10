import Container from "@components/ui/container";
import Layout from "@components/layout/layout";


const dataBrands = [
    {
        logoUrl: '/assets/images/brands/hunter-shoes.png', 
        title: 'Hunter Shoes', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/fusion.png', 
        title: 'Adidas', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/shovia.png', 
        title: 'Fania', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/hunter-shoes.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/fusion.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/shovia.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/hunter-shoes.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/fusion.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/shovia.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/hunter-shoes.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/fusion.png', 
        title: 'Veja', 
        followers: '1500'
    },
    {
        logoUrl: '/assets/images/brands/shovia.png', 
        title: 'Veja', 
        followers: '1500'
    },
]


export default function Brands () {

    return (
        <>
            <Container className='text-black p-4'>
                <div className=' mx-auto p-4 mb-20 px-20'>
                    <h1 className='text-black font-bold text-xl mb-8' >Descubra a Responsabilidade das Marcas</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi distinctio eos. Quae nulla error, facilis saepe, voluptas, optio voluptates a tenetur maiores eum voluptatum amet ex ut ipsam eius!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti, porro voluptatem perferendis dicta excepturi earum. Provident mollitia molestiae itaque quisquam quod nam officiis ex libero eum assumenda. Voluptatum, nisi!</p>
                </div>
                <div className=" justify-between mb-16 mx-auto flex-wrap w-4/5 gap-2 flex px-12">
                    {dataBrands.map((item, key) => {
                        return(
                            <div key={key} className=' flex gap-4 items-center justify-between p-2'>
                                <img className=' rounded-full w-20' src={item.logoUrl} alt="" />
                                <div className='text-black text-center'>
                                    <h3 className='font-bold'>{item.title}</h3>
                                    <h2>{item.followers} Seguidores</h2>
                                </div>
                                <a href='/marcas/pagina-marca' className='bg-black text-white py-4 px-8 rounded-md' >Ver Produtos</a>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

Brands.Layout = Layout;
