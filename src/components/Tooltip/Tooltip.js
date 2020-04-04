import React from 'react';
import style from './Tooltip.module.scss';

const Tooltip = ({ children, isOpen }) => {
  if (isOpen) {
    return <div className={style.wrapper}>{children}</div>;
  } else {
    return null;
  }
};

export default Tooltip;
