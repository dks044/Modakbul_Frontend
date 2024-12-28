import {blackColor, brandColor} from '@/constants';
import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const HomeWrapper = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${brandColor};
  padding-top: ${responsiveHeight(1)};
  padding-left: ${responsiveWidth(5)};
  padding-right: ${responsiveWidth(5)};
`;

export const HomeSection = styled(View)`
  display: flex;
  gap: ${responsiveHeight(2)}px;
`;

export const LogoBox = styled(View)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled(View)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${responsiveHeight(1)}px;
`;

export const DescriptionText = styled(Text)`
  font-size: ${responsiveWidth(5)}px;
  font-family: GmarketSansTTFMedium;
  text-align: center;
  color: ${blackColor};
`;
