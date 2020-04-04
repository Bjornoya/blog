import React from 'react';
import style from './Menu.module.scss';
import Icon from '../Icon/Icon';

const MenuItem = ({ children, icon, onClick }) => {
  return (
    <div onClick={onClick} className={style.item}>
      <Icon icon={icon} />
      {children}
    </div>
  );
};

export default MenuItem;
