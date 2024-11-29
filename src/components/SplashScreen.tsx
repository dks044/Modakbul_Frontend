import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import {useNavi} from '@/hooks/useNavi';
import {brandColor} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';

const SplashWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${brandColor};
  transition: all 1;
`;

const Title = styled(Text)`
  color: #4b3c28;
  font-size: ${responsiveWidth(20)}px;
`;

const LottieStyled = styled(LottieView)`
  width: 70%;
  height: 50%;
`;

const SplashScreen = () => {
  const navigation = useNavi();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SplashWrapper>
      <LottieStyled
        source={require('../assets/lottie/splash.json')}
        autoPlay
        loop
      />
      <Title>모닥불</Title>
    </SplashWrapper>
  );
};

export default SplashScreen;
