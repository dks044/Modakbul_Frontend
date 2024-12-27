import {subBrandColor2, subBrandColor3} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';
import React from 'react';
import {TextInput} from 'react-native-paper';

interface CustomInputProps {
  value: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const CustomInput = ({value, placeholder, setValue}: CustomInputProps) => {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
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
