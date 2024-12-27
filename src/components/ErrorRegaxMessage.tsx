import {useValidateRegax} from '@/screens/Register/hooks/useValidateRegax';
import React from 'react';
import {Text} from 'react-native-paper';

interface ErrorRegaxMessageProps {
  value: string;
  regax: RegExp;
  errorMessage: string;
}

const ErrorRegaxMessage = ({
  value,
  regax,
  errorMessage,
}: ErrorRegaxMessageProps) => {
  const isRegaxValid = useValidateRegax(value, regax)();

  return (
    <>{value.length > 0 && !isRegaxValid && <Text>{errorMessage}</Text>}</>
  );
};

export default ErrorRegaxMessage;
