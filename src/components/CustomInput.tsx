import React from 'react';
import {TextInput, TextInputProps} from 'react-native-paper';
import {Controller, Control} from 'react-hook-form';

interface CustomInputProps extends TextInputProps {
  control: Control;
  name: string;
  error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
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
          />
        )}
        name={name}
        rules={{required: true}}
      />
    </>
  );
};

export default CustomInput;
