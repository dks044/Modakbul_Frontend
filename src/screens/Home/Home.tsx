import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>dd</Text>
      {/* 나머지 Text 컴포넌트들 */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // 수직 중앙 정렬
    alignItems: 'center', // 수평 중앙 정렬
    backgroundColor: '#fff', // 배경색 추가
  },
});
