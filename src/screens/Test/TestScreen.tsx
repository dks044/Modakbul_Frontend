import Button from '@/components/Button';
import Layout from '@/components/Layout';
import {useNavi} from '@/hooks/useNavi';
import showToast from '@/utils/showToast';
import React from 'react';
import {Text} from 'react-native';

const TestScreen = () => {
  const navigation = useNavi();

  const handleSuccess = () => {
    showToast('success', '작업이 성공적으로 완료되었습니다.');
  };

  const handleError = () => {
    showToast('error', '문제가 발생했습니다. 다시 시도하세요.');
  };

  const handleInfo = () => {
    showToast('info', '이것은 정보 메시지입니다.');
  };

  return (
    <Layout AppbarHeaderName="테스트">
      <Button title="돌아가기" onPress={() => navigation.replace('Home')} />
      <Text>테스트</Text>
      <Button
        title="저를 누르면 성공이 나와요"
        onPress={() => handleSuccess()}
      />
      <Button title="저를 누르면 에러가 나와요" onPress={() => handleError()} />
      <Button title="저를 누르면 info가 나와요" onPress={() => handleInfo()} />
    </Layout>
  );
};

export default TestScreen;
