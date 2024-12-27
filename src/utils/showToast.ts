import Toast from 'react-native-toast-message';

type toastType = 'success' | 'error' | 'info';

const showToast = (type: toastType, text2: string) => {
  Toast.show({
    type: type, // 'success', 'error', 'info'
    text1: '', // 제목
    text2: text2, // 추가 메시지 (선택 사항)
    position: 'top', // 위치 ('top' 또는 'bottom')
    visibilityTime: 4000, // 표시 시간 (ms)
    autoHide: true, // 자동 숨김 여부
    // topOffset: 20, // top에서의 offset
  });
};

export default showToast;
