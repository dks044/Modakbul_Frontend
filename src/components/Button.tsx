import {defaultFont, fontColor, subBrandColor} from '@/constants';
import {responsiveHeight, responsiveWidth} from '@/utils/responsive';
import React from 'react';
import {Button as CustomButton} from 'react-native-paper';
import styled from 'styled-components/native';

const StyledButton = styled(CustomButton)`
  width: 100%;
  height: ${responsiveHeight(5)}px;
  border-radius: ${responsiveWidth(6)}px;
  font-family: GmarketSansTTFMedium;
`;
interface ButtonProps {
  title: string;
  onPress?: () => void;
  icon?: string;
  disabled?: boolean;
  isLoading?: boolean;
  buttonColor?: string;
  textColor?: string;
}

const Button = ({
  title,
  onPress,
  icon,
  disabled,
  isLoading,
  buttonColor,
  textColor,
}: ButtonProps) => {
  return (
    <StyledButton
      icon={icon}
      onPress={onPress}
      disabled={disabled}
      buttonColor={buttonColor ? buttonColor : subBrandColor}
      textColor={textColor ? textColor : fontColor}
      mode="contained"
      labelStyle={{fontFamily: `${defaultFont}`}}
      loading={isLoading}>
      {title}
    </StyledButton>
  );
};

export default Button;
