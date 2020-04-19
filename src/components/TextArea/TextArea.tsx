import React from 'react';
import style from './TextArea.module.scss';
import { InputProps } from '../Input/Input';

interface ITextAreaProps extends InputProps {
  rows: number;
}

const TextArea = ({ rows, name, value, onChange }: ITextAreaProps) => {
  return (
    <textarea
      name={name}
      value={value}
      className={style.textarea}
      rows={rows}
      autoComplete="off"
      onChange={onChange}
    >
      {' '}
    </textarea>
  );
};

export default TextArea;
