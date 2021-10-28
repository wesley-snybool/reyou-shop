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

  const { src, widthImage, heightImage, imageTwo, imageOne } = props;

  debugger

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
            width: '100%',
            height: '250px',
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: '250px',
          }}
        >
        <div className='h-full'>
          <Image height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={imageOne} /></div>
        </div>

        <div
          className='relative'
          style={{
            width: '100%',
            height: '250px',
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: '250px',
          }}
        >
          <div className='component-back-flip-cards h-full'>
            <Image height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={imageOne} />
          </div>
          <div className="cardFlipBack p-2 flex">
            <div className=" w-1/2 text-xs flex flex-col">
              <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className=" form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">LIVRE DE TÓXICOS</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">SALVAR OS OCEANOS</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">APOIO A TRANSIÇÃO CLIMÁTICA</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">RECICLADO</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">PRESERVAÇÃO DAS FLORESTAS</span>
                </label>
              </div>
              <div className=" w-1/2 text-xs text-xs flex flex-col">
              <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">LIVRE DE TÓXICOS</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">SALVAR OS OCEANOS</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">APOIO A TRANSIÇÃO CLIMÁTICA</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">RECICLADO</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600" /><span className="ml-2 text-gray-700">PRESERVAÇÃO DAS FLORESTAS</span>
                </label>
              </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
};
export default FlipCard;