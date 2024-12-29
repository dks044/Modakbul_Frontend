import React from 'react';
import {EmailFormWrapper, SubtitleText, TitleText} from '../Register.Styles';
import Margin from '@/components/Margin';
import CustomInput from '@/components/CustomInput';
import ErrorRegaxMessage from '@/components/ErrorRegaxMessage';
import {blackColor, emailRegax, subBrandColor} from '@/constants';
import Button from '@/components/Button';
import {useValidateRegax} from '../hooks/useValidateRegax';
import useEmailForm from '../hooks/useEmailForm';

interface EmailFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}
const EmailForm = ({
  email,
  setEmail,
  progress,
  setProgress,
}: EmailFormProps) => {
  const isEmailValid = useValidateRegax(email, emailRegax)();
  const {handleSendMail, isLoading} = useEmailForm(
    email,
    progress,
    setProgress,
  );

  return (
    <EmailFormWrapper>
      <TitleText>이메일을 입력해주세요.</TitleText>
      <Margin height={2} />
      <SubtitleText>입력한 이메일 주소로 인증코드를 발송합니다.</SubtitleText>
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
      <Margin height={2} />
      <Button
        icon="email"
        title="다음단계"
        buttonColor={subBrandColor}
        disabled={!isEmailValid || isLoading}
        onPress={handleSendMail}
        isLoading={isLoading}
      />
      {/* Test */}
      <Margin height={2} />
      <Button
        title="테스트용 다음버튼"
        buttonColor={blackColor}
        textColor="white"
        onPress={() => setProgress(progress + 0.3)}
      />
    </EmailFormWrapper>
  );
};

export default EmailForm;
