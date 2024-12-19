import {brandColor, defaultFont} from '@/constants';
import {useNavi} from '@/hooks/useNavi';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import styled from 'styled-components/native';

interface LayoutProps {
  AppbarHeaderName: string;
  children: ReactNode;
}

const Layout = ({AppbarHeaderName, children}: LayoutProps) => {
  const navigation = useNavi();
  return (
    <LayoutWrapper>
      <Appbar.Header style={{backgroundColor: `${brandColor}`}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={AppbarHeaderName}
          titleStyle={{fontFamily: `${defaultFont}`}}
        />
      </Appbar.Header>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

export const LayoutWrapper = styled(View)`
  flex: 1;
  background-color: ${brandColor};
`;
