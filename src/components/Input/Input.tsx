import React from 'react';
import style from './Input.module.scss';

export interface InputProps {
  name: string;
  value: string;
  onChange: () => void;
}

const Input = ({ name, value, onChange }: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      className={style.input}
      onChange={onChange}
      autoComplete="off"
      type="text"
    />
  );
};

export default Input;