import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ children, className }) => {

    if(children) {
        return (
            <a className={className ? className : style.button} data-test="button">
                {children}
            </a>
        );
    } else {
        return null;
    }

};

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;