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
    <div className="">
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
          onMouseOut={handleClick}
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
        </div>
      </ReactCardFlip>
    </div>
  )
};
export default FlipCard;