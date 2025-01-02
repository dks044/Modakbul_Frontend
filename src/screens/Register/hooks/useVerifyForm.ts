import axiosInstance from '@/lib/axios';
import showToast from '@/utils/showToast';
import {useState} from 'react';

const useVerifyForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyCode = async (
    verrifyCode: string,
    progress: number,
    setProgress: React.Dispatch<React.SetStateAction<number>>,
    email: string,
  ) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/verifycode', {
        email,
        emailCode: verrifyCode,
      });
      if (response.data) {
        console.log('성공! => ', progress);
        setProgress(progress + 0.3);
        showToast('success', '이메일 인증을 성공했어요!');
        return;
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      showToast('error', '이메일을 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return {handleVerifyCode, isLoading};
};

export default useVerifyForm;
