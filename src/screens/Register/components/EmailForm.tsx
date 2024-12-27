import React from 'react';
import {EmailFormWrapper, TitleText} from '../Register.Styles';

import Margin from '@/components/Margin';
import CustomInput from '@/components/CustomInput';
import ErrorRegaxMessage from '@/components/ErrorRegaxMessage';
import {emailRegax} from '@/constants';

interface EmailFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
const EmailForm = ({email, setEmail}: EmailFormProps) => {
  return (
    <EmailFormWrapper>
      <TitleText>이메일을 입력해주세요.</TitleText>
      <Margin height={5} />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder="이메일 입력"
      />
      <ErrorRegaxMessage
        value={email}
        regax={emailRegax}
        errorMessage="올바른 이메일을 입력해주세요"
      />
    </EmailFormWrapper>
  );
};

export default EmailForm;
