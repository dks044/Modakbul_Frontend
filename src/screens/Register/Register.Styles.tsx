import {blackColor, defaultFont, greyColor, subBrandColor2} from '@/constants';
import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

//common
export const TitleText = styled(Text)`
  font-size: ${responsiveWidth(5)};
  text-align: center;
  font-family: ${defaultFont};
  color: ${blackColor};
`;

export const SubtitleText = styled(Text)`
  font-size: ${responsiveWidth(3)};
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
  padding-inline: ${responsiveWidth(5)};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${responsiveHeight(10)};
`;

//VerrifyCodeForm
export const VerrifyCodeFormWrapper = styled(View)`
  padding-inline: ${responsiveWidth(5)};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${responsiveHeight(10)};
`;

export const VerrifyCodeInputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface CodeBoxProps {
  left?: number;
  right?: number;
}
export const CodeText = styled(Text)`
  color: ${blackColor};
  font-size: ${responsiveWidth(5)};
`;

export const CodeWrapper = styled(View)`
  display: flex;
  gap: ${responsiveWidth(5)};
  flex-direction: row;
`;

export const CodeBox = styled(View)<CodeBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  background-color: ${subBrandColor2};
  width: ${responsiveWidth(13)};
  height: ${responsiveHeight(7)};
  left: ${({left}) => left || '0'};
  right: ${({right}) => right || '0'};
`;
