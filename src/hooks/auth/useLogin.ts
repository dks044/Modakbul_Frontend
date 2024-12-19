import axiosInstance from '@/lib/axios';
import axios from 'axios';
import React from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';

//TODO: 회원가입 로직 구현 후 로그인 로직 구현해야함..
const useLogin = () => {
  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      const response = await axiosInstance.post('/auth/login', {...data});
    } catch (error) {}
  };

  return null;
};

export default useLogin;
