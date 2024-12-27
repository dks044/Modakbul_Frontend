import {blackColor, defaultFont, greyColor} from '@/constants';
import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

//common
export const TitleText = styled(Text)`
  font-size: ${responsiveWidth(5)}px;
  text-align: center;
  font-family: ${defaultFont};
  color: ${blackColor};
`;

export const SubtitleText = styled(Text)`
  font-size: ${responsiveWidth(3)}px;
  text-align: center;
  font-family: ${defaultFont};
  color: ${greyColor};
`;

//Register
export const RegisterWrapper = styled(View)`
  flex: 1;
`;

//EmailForm
export const EmailFormWrapper = styled(View)`
  padding-inline: ${responsiveWidth(5)}px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${responsiveHeight(10)}px;
`;
