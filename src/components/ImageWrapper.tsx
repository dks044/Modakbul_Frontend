import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components/native';

interface ImageWrapperProps {
  src: any; // 이미지 소스
  width: number; // 이미지 너비
  height: number; // 이미지 높이
}
interface ImageContainerProps {
  height: number;
  width: number;
}
const ImageContainer = styled(View)<ImageContainerProps>`
  height: ${props => responsiveHeight(props.height || 10)};
  width: ${props => responsiveWidth(props.width || 10)};
  justify-content: center;
  align-items: center;
  border-radius: ${responsiveWidth(6)}px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ImageWrapper: React.FC<ImageWrapperProps> = ({src, width, height}) => {
  return (
    <ImageContainer width={width} height={height}>
      <StyledImage source={src} />
    </ImageContainer>
  );
};

export default ImageWrapper;
