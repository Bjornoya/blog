import React from 'react';
import style from './TextArea.module.scss';

const TextArea = ({ children, rows, name, value, onChange }) => {
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
