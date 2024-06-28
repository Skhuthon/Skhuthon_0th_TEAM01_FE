import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useState,
  KeyboardEvent,
} from 'react';

import { inputStyle } from '../styles/ui/input.css';
interface InputProps extends ComponentPropsWithoutRef<'input'> {
  onEnter?: (_value: string) => void;
}

export const Input = ({ onEnter, ...rest }: InputProps) => {
  const [input, setInput] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter(input);
      setInput('');
    }
  };

  return (
    <input
      className={inputStyle}
      value={input}
      onChange={onChangeInput}
      onKeyUp={onKeyPressEnter}
      {...rest}
    />
  );
};
