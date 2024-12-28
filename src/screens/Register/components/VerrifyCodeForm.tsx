import React from 'react';
import {
  SubtitleText,
  TitleText,
  VerrifyCodeFormWrapper,
} from '../Register.Styles';
import Margin from '@/components/Margin';
import VerrifyCodeInput from './input/VerrifyCodeInput';
import Button from '@/components/Button';
import {subBrandColor} from '@/constants';

interface VerrifyCodeFormProps {
  verrifyCode: string;
  setVerrifyCode: React.Dispatch<React.SetStateAction<string>>;
}

const VerrifyCodeForm = ({...props}: VerrifyCodeFormProps) => {
  return (
    <VerrifyCodeFormWrapper>
      <TitleText>인증코드를 입력해주세요.</TitleText>
      <Margin height={2} />
      <SubtitleText>
        발송된 이메일을 확인하여 4자리 코드를 입력해주세요
      </SubtitleText>
      <Margin height={2} />
      <VerrifyCodeInput
        value={props.verrifyCode}
        setValue={props.setVerrifyCode}
      />
      <Margin height={2} />
      {/* TODO: 다음 비즈니스 로직해야 함 */}
      <Button
        icon="send"
        title="다음단계"
        buttonColor={subBrandColor}
        disabled={props.verrifyCode.length < 4}
      />
    </VerrifyCodeFormWrapper>
  );
};

export default VerrifyCodeForm;
