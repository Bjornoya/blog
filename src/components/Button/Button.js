import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className ? className : style.button} data-test="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
