import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Search from './products-search';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const dataOptionsMenu = [
    {
        uuid: 12,
        heading: 'IMPACTO AMBIENTAL',
        content: [
            {name: 'UPCYCLED'},
            {name: 'RECICLADO'},
            {name: 'EMISSÕES BAIXAS'},
            {name: 'LIVRE DE TÓXICOS'},
            {name: 'SALVAR OS OCEANOS'},
            {name: 'NEUTRO EM CARBONO'},
            {name: 'EMBALAGEM ECOLÓGICA'},
            {name: 'PRESERVAÇÃO DAS FLORESTAS'},
            {name: 'APOIO À TRANSIÇÃO CLIMÁTICA'},
        ]
    },
    {
        uuid: 12,
        heading: 'IMPACTO SOCIAL',
        content: [
            {name: 'ARTESANATO'},
            {name: 'TRABALHO ÉTICO'},
            {name: 'TRANSPARÊNCIA'},
            {name: 'PRODUÇÃO LOCAL'},
            {name: 'PEQUENOS NEGÓCIOS'},
            {name: 'TAMANHO INCLUSIVO'},
            {name: 'APOIO ÁS COMUNIDADES'},
            {name: 'EMPODERAMENTO FEMININO'},
            {name: 'EMPRESAS COM PROPRIETÁRIOS NEGROS'},


        ]
    },
    {
        uuid: 12,
        heading: 'CONSUMO MODERNO',
        content: [
            {name: 'ALUGUEL'},
            {name: 'ATEMPORAL'},
            {name: 'SECOND HAND'},
            {name: 'SLOW FASHION'},
            {name: 'SOB ENCOMENDA'},
            {name: 'ECONOMIA CIRCULAR'},
            {name: 'CONCEITO MODULAR'},
        ]
    },
    {
        uuid: 12,
        heading: 'ÉTICA ANIMAL',
        content: [
            {name: 'VEGANO'},
            {name: 'CRUELTY-FREE'},
            {name: 'LÃ RESPONSÁVEL'},
            {name: 'BIODIVERSIDADE'},
            {name: 'ORIGEM ANIMAL RESPONSÁVEL'},
        ]
    },

    {
        uuid: 12,
        heading: 'INOVAÇÃO E TECNOLOGIA',
        content: [
            {name: 'BLOCK CHAIN'},
            {name: 'MATERIAIS DO FUTURO'},
        ]
    },
]

export default function Valores () {
    return (
        <>
            <Container className='my-8 w-full md:px-0 md:py-0 md:mt-0'>
                <div className="banner-valores flex items-center justify-center bg-center bg-hero bg-gray-300 p-8">
                    <span className="title-valores" >Entendendo os Valores</span>
                </div>
            </Container>
            <Container className='flex'>
                    <div className='w-full flex flex items-start justify-between '>
                        <Accordion className=' w-full' allowZeroExpanded>
                        {dataOptionsMenu.map((item) => (
                            <AccordionItem key={item.uuid}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flex gap-4 text-xl font-bold text-black p-4 ">
                                        {item.heading}
                                        <img src="/assets/images/valores/arrow-donw.svg" alt="" />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                    {item.content.map((i, index) => (
                                        <AccordionItemPanel key={index} className='p-4 my-4 text-left text-white'>
                                               <span className="bg-black rounded-xl p-4 px-6 text-md font-bold" >{i.name}</span>
                                        </AccordionItemPanel>
                                    ))}
                                </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                    <div className='text-black p-12'>
                        <span className="title-recicle text-2xl text-black" >RECICLADO</span>
                        <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusantium aliquam, facere illum, animi quis adipisci nesciunt odit quam sit in dolorem voluptate veritatis doloribus provident laborum dolore nisi minima.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit architecto accusamus, maiores commodi repellat laborum labore in placeat quibusdam dolore cumque? Dignissimos, accusantium. Deleniti aperiam temporibus laboriosam inventore reiciendis.</p>
                        <div className='header-products-valores'>
                            <h1>Produtos Relacionados</h1>
                            <button>Ver Tudo</button>
                        </div>
                        <Search />
                    </div>
            </Container>
        </>
    )
}

Valores.Layout = Layout;