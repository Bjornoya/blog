import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
    if(children) {
        return (
            <div data-test="button">
                {children}
            </div>
        );
    } else {
        return null;
    }

};

Button.propTypes = {
    children: PropTypes.string,
    num: PropTypes.number,
};

export default Button;