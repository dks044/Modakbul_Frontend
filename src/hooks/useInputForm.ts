import {FieldValues, useForm} from 'react-hook-form';

const useInputForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>();

  return {control, handleSubmit, errors};
};

export default useInputForm;
