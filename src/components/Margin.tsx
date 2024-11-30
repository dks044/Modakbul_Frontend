import {responsiveHeight} from '@/utils/responsive';
import React from 'react';
import {View, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface MarginBoxProps extends ViewProps {
  height?: number;
}

const MarginBox = styled(View)<MarginBoxProps>`
  height: ${props => responsiveHeight(props.height || 10)};
`;

interface MarginProps {
  height?: number;
}

const Margin = ({height = 10}: MarginProps) => {
  return <MarginBox height={height} />;
};

export default Margin;
