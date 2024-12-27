import {useState} from 'react';

export const useRegisterState = () => {
  const [progress, setProgress] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [certification, setCertification] = useState<boolean>(false);
  const [verrifyCode, setVerrifyCode] = useState('');

  return {
    progress,
    setProgress,
    email,
    setEmail,
    certification,
    setCertification,
    verrifyCode,
    setVerrifyCode,
  };
};
