import React from 'react';
import {LoginWrapper, LottieStyled} from './Login.Styles';
import {useNavi} from '@/hooks/useNavi';
import Logo from '@/components/Logo';
import useInputForm from '@/hooks/useInputForm';
import Layout from '@/components/Layout';
// import CustomInput from '@/components/CustomInput';

const Login = () => {
  const navigation = useNavi();
  const {control, handleSubmit, errors} = useInputForm();

  return (
    <Layout AppbarHeaderName="로그인">
      <LoginWrapper>
        <LottieStyled
          source={require('@/assets/lottie/bonfire.json')}
          autoPlay
          loop
        />
        <Logo widthPercentage={60} heightPercentage={10} />
      </LoginWrapper>
    </Layout>
  );
};

export default Login;
