import axiosInstance from '@/lib/axios';
import showToast from '@/utils/showToast';
import {useState} from 'react';

const useVerifyForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleVerifyCode = async (
    verrifyCode: string,
    progress: number,
    setProgress: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/verifycode', {
        verrifyCode,
      });
      if (response) {
        setProgress(progress + 0.3);
      }
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
