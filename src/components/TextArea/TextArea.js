import React from 'react';
import style from './TextArea.module.scss';

const TextArea = ({ children, rows }) => {
    return (
        <textarea className={style.textarea} rows={rows}></textarea>
    );
};

export default TextArea;