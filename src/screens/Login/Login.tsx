import React from 'react';
import {Appbar} from 'react-native-paper';
import {LoginSection, LoginWrapper, LottieStyled} from './Login.Styles';
import {useNavi} from '@/hooks/useNavi';
import {brandColor, defaultFont} from '@/constants';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import useInputForm from '@/hooks/useInputForm';
import Layout from '@/components/Layout';
// import CustomInput from '@/components/CustomInput';

const Login = () => {
  const navigation = useNavi();
  const {control, handleSubmit, errors} = useInputForm();

  return (
    <Layout AppbarHeaderName="로그인">
      <LoginSection>
        <LottieStyled
          source={require('@/assets/lottie/bonfire.json')}
          autoPlay
          loop
        />
        <Logo widthPercentage={60} heightPercentage={10} />
      </LoginSection>
    </Layout>
  );
};

export default Login;
