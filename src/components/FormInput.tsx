import React from 'react';
import {TextInput, TextInputProps} from 'react-native-paper';
import {Controller, Control} from 'react-hook-form';
import {subBrandColor2, subBrandColor3} from '@/constants';
import {responsiveWidth} from '@/utils/responsive';

interface FormInputProps extends TextInputProps {
  control: Control;
  name: string;
  error?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  error,
  ...rest
}) => {
  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            {...rest}
            error={!!error}
            style={{
              backgroundColor: `${subBrandColor2}`,
            }}
            outlineColor={subBrandColor2}
            activeOutlineColor={subBrandColor3}
            outlineStyle={{borderRadius: responsiveWidth(3)}}
          />
        )}
        name={name}
        rules={{required: true}}
      />
    </>
  );
};

export default FormInput;
