import React, { useState } from 'react';
import style from './Tooltip.module.scss';
import Icon from '../Icon/Icon';

const Tooltip = ({ children, id }) => {
  const [tooltip, setTooltip] = useState(false); // Логика тултипа. На вход принимает индекс поста в массиве
  const handleTooltip = (id) => {
    setTooltip(!tooltip);
  };
  return (
    <>
      <Icon onClick={() => handleTooltip(id)} icon="more_vert" />
      {tooltip ? <div className={style.wrapper}>{children}</div> : null}
    </>
  );
};

export default Tooltip;
