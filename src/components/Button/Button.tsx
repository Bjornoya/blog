import React from 'react';
import style from './Button.module.scss';

interface IButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} className={className ? className : style.button} data-test="button">
      {children}
    </button>
  );
};

export default Button;
