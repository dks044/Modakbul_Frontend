import {subBrandColor2, subBrandColor3} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';
import React from 'react';
import {TextInput} from 'react-native-paper';

interface CustomInputProps {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  width?: number;
}
const CustomInput = ({...props}: CustomInputProps) => {
  return (
    <>
      <TextInput
        value={props.value}
        onChangeText={text => props.setValue(text)}
        placeholder={props.placeholder}
        mode="outlined"
        style={{
          backgroundColor: `${subBrandColor2}`,
        }}
        outlineColor={subBrandColor2}
        activeOutlineColor={subBrandColor3}
        outlineStyle={{borderRadius: responsiveWidth(3)}}
      />
    </>
  );
};

export default CustomInput;
