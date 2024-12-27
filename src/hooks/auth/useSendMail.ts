import axiosInstance from '@/lib/axios';
import showToast from '@/utils/showToast';
import {AxiosError} from 'axios';
import {useCallback, useState} from 'react';

const useSendMail = (email: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const sendMail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/sendcode', {email});
      console.log('Response:', response);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('General Error:', error);
        console.error(error.response?.data);
        showToast('error', '서버에서 에러가 발생했어요.');
        throw error.response?.data;
      } else {
        showToast('error', '서버에서 에러가 발생했어요.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return {sendMail, isLoading};
};

export default useSendMail;
