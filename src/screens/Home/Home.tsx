import React from 'react';
import {
  DescriptionText,
  DescriptionWrapper,
  HomeWrapper,
  LogoBox,
} from './Home.Styles';
import Logo from '@/components/Logo';
import Margin from '@/components/Margin';
import ImageWrapper from '@/components/ImageWrapper';
import DescriptionImage from '@/assets/images/fireDevelopers.jpg';
import Button from '@/components/Button';

const Home = () => {
  return (
    <HomeWrapper>
      <LogoBox>
        <Logo widthPercentage={60} heightPercentage={10} />
      </LogoBox>
      <Margin height={2} />
      <DescriptionWrapper>
        <ImageWrapper src={DescriptionImage} width={50} height={25} />
        <Margin height={5} />
        <DescriptionText>개발자들을 위한</DescriptionText>
        <DescriptionText>특별한 소개팅 플랫폼입니다.</DescriptionText>
      </DescriptionWrapper>
      <Button title="안녕하세요" />
    </HomeWrapper>
  );
};

export default Home;
