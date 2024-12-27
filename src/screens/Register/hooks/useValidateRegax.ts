import {useCallback} from 'react';

export const useValidateRegax = (value: string, regax: RegExp) => {
  return useCallback(() => {
    return regax.test(value);
  }, [value, regax]);
};
