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
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Image objectFit='cover' height={heightImage} width={widthImage} src={imageOne} />
        </div>

        <div
          className=' h-[310px] relative flex justify-center items-center'
        >
          <div className='h-[310px]'>
            <Image height={heightImage} width={widthImage} src={imageOne} />
          </div>
          <div className="cardFlipBack">
            <h3 className="p-5 font-bold text-black" >{titleFlip}</h3>
            <div className="px-5 grid grid-cols-2 gap-2 ">
              {options.map((item, index) => {
                return (
                  <label key={`${index}--cheks-flips`} className=" my-2 flex items-center">
                    <input type="checkbox" className=" form-checkbox h-5 w-5" /><span className="ml-2 uppercase text-black">{item.title}</span>
                  </label>
                )
              })}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
};
export default FlipCard;