import React from 'react';
import style from './Tooltip.module.scss';
import Icon from "../Icon/Icon";

const Tooltip = ({ className, children, isOpen }) => {
    console.log(isOpen)
    if (isOpen) {
        return (
            <div className={style.wrapper}>
                <div className={style.item}>
                    <Icon icon="edit" />
                    Edit post
                </div>
                <div className={style.item}>
                    <Icon icon="delete" />
                    Delete post
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Tooltip;