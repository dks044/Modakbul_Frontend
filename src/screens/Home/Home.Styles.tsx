import {brandColor} from '@/constants';
import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import {SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const HomeWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${brandColor};
  padding-top: ${responsiveHeight(10)}px;
  padding-left: ${responsiveWidth(5)}px;
  padding-right: ${responsiveWidth(5)}px;
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
`;
