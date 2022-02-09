import { useEffect } from "react";
import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Search from "./products-search";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { getMyUniverse } from "src/redux/modules/my-universe/myUniverse";
import { useAppDispatch, useAppSelector } from "src/redux/hooks/selectors";

export default function Valores() {
  const dispatch = useAppDispatch();
  const { data: dataSustaineble } = useAppSelector((state) => state.universe);

  useEffect(() => {
    dispatch(getMyUniverse());
  }, []);

  return (
    <>
      <Container className="my-8 w-full md:px-0 md:py-0 md:mt-0">
        <div className="banner-valores flex items-center justify-center bg-center bg-hero bg-gray-300 p-8">
          <span className="title-valores">Entendendo os Valores</span>
        </div>
      </Container>
      <Container className="flex">
        <div className="w-full flex flex items-start justify-between ">
          <Accordion className=" w-full" allowZeroExpanded>
            {dataSustaineble.map((item: any) => (
              <AccordionItem key={item?.uid}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex gap-4 text-xl font-black text-black p-4 ">
                    {item.title}
                    <img src="/assets/images/valores/arrow-donw.svg" alt="" />
                  </AccordionItemButton>
                </AccordionItemHeading>
                {item.subValues.map((subValues: any) => (
                  <AccordionItemPanel
                    onClick={() => {}}
                    key={subValues.uid}
                    className="p-4 my-4 text-left"
                  >
                    <span className="bg-black text-white rounded-xl p-4 px-6 text-md font-bold">
                      {subValues.title}
                    </span>
                  </AccordionItemPanel>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-black p-12">
          <span className="title-recicle text-2xl text-black">RECICLADO</span>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            accusantium aliquam, facere illum, animi quis adipisci nesciunt odit
            quam sit in dolorem voluptate veritatis doloribus provident laborum
            dolore nisi minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
            architecto accusamus, maiores commodi repellat laborum labore in
            placeat quibusdam dolore cumque? Dignissimos, accusantium. Deleniti
            aperiam temporibus laboriosam inventore reiciendis.
          </p>
          <div className="header-products-valores">
            <h1>Produtos Relacionados</h1>
            <button>Ver Tudo</button>
          </div>
          <Search />
        </div>
      </Container>
    </>
  );
}

Valores.Layout = Layout;
