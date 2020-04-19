import React from 'react';
import style from './Icon.module.scss';
import MaterialIcon from 'material-icons-react';

export interface IconProps {
  icon: string;
  onClick?: () => void;
}

const Icon = ({ icon, onClick }: IconProps) => {
  return (
    <div onClick={onClick} className={style.icon}>
      <MaterialIcon icon={icon} />
    </div>
  );
};

export default Icon;