import React from 'react';
import style from './Menu.module.scss';
import Icon, { IconProps } from '../Icon/Icon';

interface IMenuItemProps extends IconProps {
  children: string;
}

const MenuItem = ({ children, icon, onClick }: IMenuItemProps) => {
  return (
    <div onClick={onClick} className={style.item}>
      <Icon icon={icon} />
      {children}
    </div>
  );
};

export default MenuItem;
