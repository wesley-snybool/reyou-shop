import Container from "@components/ui/container";
import Layout from "@components/layout/layout";

export default function Valores () {
    return (
        <>
            <Container className='p-0 m-0 w-full'>
                <div className="flex items-center justify-center bg-center h-80 bg-hero bg-gray-300 p-8">
                    <span className="title-valores" >Entendendo os Valores</span>
                </div>
            </Container>
            <Container className='p-0 m-0 w-full'>
                    <h1 className="title-valores" >Reciclado</h1>
            </Container>
        </>
    )
}

Valores.Layout = Layout;