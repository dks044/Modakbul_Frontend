import useSendMail from '@/hooks/auth/useSendMail';
import showToast from '@/utils/showToast';
import React from 'react';

const useEmailForm = (
  email: string,
  progress: number,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
) => {
  const {sendMail, isLoading} = useSendMail(email);

  const handleSendMail = async () => {
    try {
      await sendMail();
      showToast('success', '이메일에 인증코드를 보냈어요!');

      setProgress(progress + 0.3);
      //TODO: 필요시 에러 관련 처리
    } catch (error) {
      console.log(error);
    }
  };

  return {handleSendMail, isLoading};
};

export default useEmailForm;
