import Image from "next/image";
import { useState } from "react";
import Button from "./ButtonCommon";

interface BoxProps {
  imageSrc: string;
  numberImage: string;
  buttonText: string;
  text: string;
  maintext: string;
  width: string;
  height: string;
}

export default function Box({
  imageSrc,
  numberImage,
  buttonText,
  text,
  maintext,
  width,
}: BoxProps) {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="flex items-center justify-center mb-[10px]">
      <div
        className={`flex flex-col items-center justify-center rounded-md bg-[#E5EBFD] pt-[30px] pr-[25px] pb-[30px] pl-[25px] transition-all duration-500 ${
          isClick ? "h-[450px]" : "h-[250px]"
        }`}
        style={{ width }}
      >
        <div className="w-full flex justify-end items-end mb-[10px]">
          <p
            className="text-2xl pr-[7px] font-semibold text-black"
            dangerouslySetInnerHTML={{ __html: maintext }}
          ></p>
          <Image
            src={numberImage}
            alt="numberImage"
            width={30}
            height={30}
            className="self-center"
          />
        </div>

        <div className="flex flex-row items-start justify-start w-full h-[130px] pt-[13px]">
          <Image src={imageSrc} alt="logo" width={130} height={130} />

          <div className="flex flex-col items-start justify-start h-full w-[350px] ml-[45px]">
            <p
              className="text-gray-700 text-left mb-[16px] text-[18px] overflow-hidden text-ellipsis"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <Button text={buttonText} onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
