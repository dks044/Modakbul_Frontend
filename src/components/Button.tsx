import {subBrandColor} from '@/constants';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button as PaperButton, ActivityIndicator} from 'react-native-paper';

interface CustomButtonProps {
  title: string; // 버튼 텍스트
  onPress?: () => void; // 버튼 클릭 핸들러
  loading?: boolean; // 로딩 상태
  color?: string; // 버튼 색상
  style?: object; // 추가 스타일
}

const Button: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  color = subBrandColor,
  style,
}) => {
  return (
    <View style={styles.container}>
      <PaperButton
        mode="contained"
        onPress={onPress}
        loading={loading}
        disabled={loading}
        style={[styles.button, style, {backgroundColor: color}]}>
        {loading ? <ActivityIndicator color="#fff" /> : title}
      </PaperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10 * 10,
  },
});

export default Button;
