import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { useDispatch } from "react-redux";
import { addFlipCardCheck } from 'src/redux/modules/add-flip-card/addFlipCard';
import { useFlipCardCheck } from 'src/redux/hooks/flipcardCheck'
import { isEmpty } from 'lodash';

function FlipCard(props) {
  const {
    src,
    widthImage,
    heightImage,
    imageTwo,
    imageOne,
    options,
    titleFlip,
    isAllFlip,
  } = props;

  const { checkListValue: dataFlipCheck } = useFlipCardCheck();
  const [isFlipped, setIsFlipped] = useState(isAllFlip);
  const [stateCheckOptions, setStateCheckOptions] = useState([]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleItemClick = (titleCheck, titleFlip) => {
    let newState = [];
    newState = [...stateCheckOptions];
    
    if(newState.includes(titleCheck)) {
      newState = newState.filter(item => item !== titleCheck);
    }else {
      newState.push(titleCheck);
    }
    setStateCheckOptions(newState);
  };

  
  useEffect(() =>{
    dispatch(addFlipCardCheck(stateCheckOptions));
  },[stateCheckOptions])

  useEffect(() => {},[isAllFlip])

  return (
    <div onMouseEnter={() => handleClick()} className="">
      <ReactCardFlip isFlipped={isAllFlip | isFlipped} flipDirection="horizontal">
        <div
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            objectFit="cover"
            height={heightImage}
            width={widthImage}
            src={imageOne}
          />
        </div>

        <div className="h-[310px] relative flex justify-center items-center bg-facebook">
          <div className="h-[310px]">
            <Image height={heightImage} width={widthImage} src={imageOne} />
          </div>
          <div className="cardFlipBack">
            <h3 className="p-5 font-bold text-black">{titleFlip}</h3>
            <div
              className={
                widthImage > 311
                  ? "px-5 grid grid-cols-2 gap-2"
                  : "px-5 grid grid-cols-1 gap-2"
              }
            >
              {options.map((item, index) => {
                console.log(titleFlip, 'cheks flips')
                return (
                  <label
                    key={`${index}--cheks-flips`}
                    className="my-1 flex items-center"
                  >
                    <input onClick={() => handleItemClick(item.title, titleFlip)} type="checkbox" className=" form-checkbox h-5 w-5" />
                    <span className="ml-2 uppercase text-black">
                      {item.title}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default FlipCard;
