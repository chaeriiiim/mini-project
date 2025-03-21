"use client";

import Box from "../common/BoxCommon";

export default function InfoBox() {
  return (
    <Box
      imageSrc="/main_1.svg"
      numberImage="/number_1.svg"
      maintext="Info"
      buttonText="정보 입력하기"
      text='내 정보를 입력하면 <strong class="font-extrabold">더 정확한 정보를 얻고,<br/>그에 맞는 정보를 자세히</strong> 알아볼 수 있어요!'
      width="540px"
      height="250px"
    />
  );
}
