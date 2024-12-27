import React from 'react';
import DialogInitial from '../DialogInitial';
import {DialogProps} from '@/types/Dialog.types';
import Button from '../Button';
import {blackColor, subBrandColor3, whiteColor} from '@/constants';
import {View} from 'react-native';

import Margin from '../Margin';
import {useNavi} from '@/hooks/useNavi';

interface SignupModalProps {
  show: boolean;
  onClose: () => void;
}
//TODO: 회원가입 관련 백엔드 & 비즈니스로직 구현해야함!
const SignupDialog = ({show, onClose}: SignupModalProps) => {
  const navigation = useNavi();

  const dialogProps: DialogProps = {
    title: '회원가입',
    content: (
      <View>
        <Button
          icon="google"
          title="구글 회원가입"
          buttonColor={whiteColor}
          textColor={blackColor}
          onPress={() => console.log('구글 회원가입 누름ㅋ')}
        />
        <Margin height={1} />
        <Button
          icon="github"
          title="깃허브 회원가입"
          buttonColor={blackColor}
          textColor={whiteColor}
          onPress={() => console.log('깃허브 회원가입 누름ㅋ')}
        />
        <Margin height={1} />
        <Button
          icon="email"
          title="이메일 회원가입"
          buttonColor={subBrandColor3}
          textColor={whiteColor}
          onPress={() => {
            navigation.navigate('Register');
            onClose();
          }}
        />
      </View>
    ),
  };

  return <DialogInitial show={show} onClose={onClose} dialog={dialogProps} />;
};

export default SignupDialog;
