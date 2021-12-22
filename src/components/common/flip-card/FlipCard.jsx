import Image from 'next/image';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import impactosocial from '../../../../public/assets/images/flip-card/impactosocial.jpeg';
import consumomoderno from '../../../../public/assets/images/flip-card/consumomoderno.jpeg';
import eticaanimal from '../../../../public/assets/images/flip-card/eticaanimal.jpeg';
import impactoambiental from '../../../../public/assets/images/flip-card/impactoambiental.jpeg';
import inovacaoetecnologia from '../../../../public/assets/images/flip-card/inovacaotecnologica.jpeg';
import { homeThreeMasonryBanner as img_flipscards } from "@framework/static/banner";

function FlipCard(props) {

  const { 
    src, 
    widthImage, 
    heightImage, 
    imageTwo, 
    imageOne, 
    options,
    titleFlip,
  } = props;


  const dataImages = [
    { nome: 'impactosocial' },
    { nome: 'impactoambiental' }
  ]

  /*   dataImages.map((item) => {
      console.log(img_flipscards)
    }) */

  const [isFlipped, setIsFlipped] = useState(false);
  const { image } = img_flipscards;

  /*   console.log(img_flipscards[0].image.desktop.url, 'URL da imagem passada diretamente via objeto')
    console.log(imageTwo, 'URL da imagem passada diretamente via props') */




  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onMouseEnter={handleClick} className="">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          onMouseEnter={handleClick}
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: '250px',
          }}
        >
          <div className='p-1  flex items-center '>
            <Image height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={imageOne} /></div>
        </div>

        <div
          className='relative'
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: '250px',
          }}
        >
          <div className='component-back-flip-cards '>
            <Image layout='fixed' height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={imageOne} />
          </div>
          <div className="cardFlipBack p-2 flex items-center flex-col">
            <h3>{titleFlip}</h3>
            <div className="input-check w-full text-xs flex-wrap flex flex-col">
              {options.map((item, index) => {
                return (
                  <label key={`${index}--cheks-flips`} className="inline-flex items-center mt-3">
                    <input type="checkbox" className=" form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">{item.title}</span>
                  </label>
                )
              })}
            </div>

            {/* 
              <div className=" w-1/2 text-xs text-xs flex flex-col">
              <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">EMISSÕES BAIXAS</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">EMBALAGEM ECOLÓGICA</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">UPCYCLED</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">ECONOMIA DE ÁGUA</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5" /><span className="ml-2 text-gray-700">NEUTRO EM CARBONO</span>
                </label>
              </div> */}
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
};
export default FlipCard;