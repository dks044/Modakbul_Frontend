import React from 'react';
import DialogInitial from '../DialogInitial';
import {DialogProps} from '@/types/Dialog.types';
import Button from '../Button';
import {blackColor, subBrandColor3, whiteColor} from '@/constants';
import {View} from 'react-native';

import Margin from '../Margin';
import {useNavi} from '@/hooks/useNavi';

interface LoginDialogProps {
  show: boolean;
  onClose: () => void;
}
//TODO: 로그인 관련 백엔드 & 비즈니스로직 구현해야함!
const LoginDialog = ({show, onClose}: LoginDialogProps) => {
  const navigation = useNavi();

  const dialogProps: DialogProps = {
    title: '로그인',
    content: (
      <View>
        <Button
          icon="google"
          title="구글 로그인"
          buttonColor={whiteColor}
          textColor={blackColor}
          onPress={() => console.log('구글 로그인 누름ㅋ')}
        />
        <Margin height={1} />
        <Button
          icon="github"
          title="깃허브 로그인"
          buttonColor={blackColor}
          textColor={whiteColor}
          onPress={() => console.log('깃허브 로그인 누름ㅋ')}
        />
        <Margin height={1} />
        <Button
          icon="email"
          title="이메일 로그인"
          buttonColor={subBrandColor3}
          textColor={whiteColor}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    ),
  };

  return <DialogInitial show={show} onClose={onClose} dialog={dialogProps} />;
};

export default LoginDialog;
