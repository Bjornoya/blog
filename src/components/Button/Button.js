import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ children }) => {

    if(children) {
        return (
            <button className={style.button} data-test="button">
                {children}
            </button>
        );
    } else {
        return null;
    }

};

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;