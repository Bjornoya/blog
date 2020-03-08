import React from 'react';
import style from './Input.module.scss';


const Input = ({ name, value, onChange }) => {
    return (
        <input name={name}
               value={value}
               className={style.input}
               onChange={onChange}
               autoComplete="off"
               type="text" />
    );
};

export default Input;