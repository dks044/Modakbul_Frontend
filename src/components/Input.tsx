import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  ValidationRule,
} from 'react-hook-form';
import {TextInput, HelperText} from 'react-native-paper';

interface InputInterface {
  control: Control<FieldValues>;
  name: string;
  rules?: Record<string, ValidationRule>;
  label: string;
  error?: FieldErrors;
  isLoading?: boolean;
}

const Input: React.FC<InputInterface> = ({
  control,
  name,
  rules,
  label,
  error,
  isLoading,
}) => {
  return (
    <>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            error={!!error}
            disabled={isLoading}
          />
        )}
        name={name}
        rules={rules}
        defaultValue=""
      />
      {error && <HelperText type="error">{error.root?.message}</HelperText>}
    </>
  );
};

export default Input;
