import React from 'react';
import style from './Icon.module.scss';
import MaterialIcon from 'material-icons-react';

const Icon = ({ icon, onClick }) => {
    return (
        <div onClick={onClick} className={style.icon}>
            <MaterialIcon icon={icon}/>
        </div>
    );
};

export default Icon;