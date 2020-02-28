import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import style from './Button.module.scss';

import { getNews } from "../../actions/actionCreators";


const Button = ({ children }) => {

    const dispatch = useDispatch();

    if(children) {
        return (
            <div className={style.button} data-test="button" onClick={() => dispatch(getNews())}>
                {children}
            </div>
        );
    } else {
        return null;
    }

};

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;