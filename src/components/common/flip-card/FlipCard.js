import Image from 'next/image';
import React, { useState } from 'react';

import impactosocial from '../../../../public/assets/images/flip-card/impactosocial.jpeg';
import consumomoderno from '../../../../public/assets/images/flip-card/consumomoderno.jpeg';
import eticaanimal from '../../../../public/assets/images/flip-card/eticaanimal.jpeg';
import impactoambiental from '../../../../public/assets/images/flip-card/impactoambiental.jpeg';
import inovacaoetecnologia from '../../../../public/assets/images/flip-card/inovacaotecnologica.jpeg';
import ReactCardFlip from 'react-card-flip';

function FlipCard(props) {

  const { ImageOne, widthImage, heightImage } = props;

  const dataImages = [{
    'socialImpact': impactosocial,
    'modernConsum': consumomoderno,
  }]

  console.log(dataImages['socialImpact'])

  const handleSelectImage = () => {
   dataImages.map((image, index) => {
      if(image[index] === ImageOne) {
        return dataImages[image]
      }
   })
  } 

  const [isFlipped, setIsFlipped] = useState(false);
  console.log(`${dataImages}`);

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
          <div className='h-full'><Image height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={impactosocial} /></div>
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
            <Image height={heightImage ? heightImage : 400} width={widthImage ? widthImage : 1200} src={impactosocial} />

          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
};
export default FlipCard;