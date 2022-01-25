import { useState } from 'react';

export const useOnchange = (type?: any) => {
  const [value, setValue] = useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    reset,
  };
};
