import React, {useState} from 'react';
import {
  DescriptionText,
  DescriptionWrapper,
  HomeSection,
  HomeWrapper,
  LogoBox,
} from './Home.Styles';
import Logo from '@/components/Logo';
import Margin from '@/components/Margin';
import ImageWrapper from '@/components/ImageWrapper';
import DescriptionImage from '@/assets/images/fireDevelopers.jpg';
import Button from '@/components/Button';
import {blackColor, subBrandColor2} from '@/constants';
import SignupDialog from '@/components/modal/SignupDialog';
import LoginDialog from '@/components/modal/LoginDialog';
import {useNavi} from '@/hooks/useNavi';

const Home = () => {
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  //Test
  const navigation = useNavi();

  return (
    <>
      <SignupDialog
        show={isSignUpDialogOpen}
        onClose={() => setIsSignUpDialogOpen(false)}
      />
      <LoginDialog
        show={isLoginDialogOpen}
        onClose={() => setIsLoginDialogOpen(false)}
      />
      <HomeWrapper>
        <HomeSection>
          <LogoBox>
            <Logo widthPercentage={60} heightPercentage={10} />
          </LogoBox>
          <Margin height={2} />
          <DescriptionWrapper>
            <ImageWrapper src={DescriptionImage} width={50} height={25} />
            <Margin height={5} />
            <DescriptionText>개발자들을 위한</DescriptionText>
            <DescriptionText>특별한 소개팅 플랫폼입니다.</DescriptionText>
          </DescriptionWrapper>
        </HomeSection>
        <HomeSection>
          <Button
            title="회원가입"
            onPress={() => setIsSignUpDialogOpen(true)}
          />
          <Button
            title="로그인"
            onPress={() => setIsLoginDialogOpen(true)}
            buttonColor={subBrandColor2}
          />
          <Button
            title="테스트화면"
            onPress={() => navigation.replace('Test')}
            buttonColor={blackColor}
            textColor="white"
          />
        </HomeSection>
      </HomeWrapper>
    </>
  );
};

export default Home;
