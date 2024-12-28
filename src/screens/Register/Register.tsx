import Layout from '@/components/Layout';
import {subBrandColor3} from '@/constants';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import {useRegisterState} from './hooks/useRegisterState';
import {RegisterWrapper} from './Register.Styles';
import EmailForm from './components/EmailForm';
import VerrifyCodeForm from './components/VerrifyCodeForm';

const Register = () => {
  const {...state} = useRegisterState();
  return (
    <Layout AppbarHeaderName="이메일 회원가입">
      <ProgressBar progress={state.progress} color={subBrandColor3} />
      <RegisterWrapper>
        {/* 1단계 이메일 입력 후 2단계 이동 */}
        {state.progress === 0 && <EmailForm {...state} />}
        {/* 2단계 입력 코드 입력 */}
        {state.progress === 0.3 && <VerrifyCodeForm {...state} />}
        {/* 3단계 아이디 비밀번호 입력 */}
      </RegisterWrapper>
    </Layout>
  );
};

export default Register;
