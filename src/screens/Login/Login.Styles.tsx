import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import styled from 'styled-components/native';

export const LoginWrapper = styled(View)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LottieStyled = styled(LottieView)`
  width: 30%;
  height: 10%;
  margin: 0;
  padding: 0;
  align-self: center;
  position: relative;
  bottom: -4%;
`;

export const TitleArticle = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
