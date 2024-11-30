import React from 'react';
import LogoSvg from '@/assets/svg/logo.svg';
import {responsiveWidth, responsiveHeight} from '@/utils/responsive'; // 경로 수정
import {fontColor} from '@/constants';

interface LogoProps {
  widthPercentage: number;
  heightPercentage: number;
}
const Logo = ({widthPercentage, heightPercentage}: LogoProps) => {
  // 비율에 따라 크기 계산
  const width = responsiveWidth(widthPercentage);
  const height = responsiveHeight(heightPercentage);

  return <LogoSvg width={width} height={height} color={fontColor} />;
};

export default Logo;
