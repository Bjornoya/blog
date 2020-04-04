import React, { useState, useRef, useEffect } from 'react';
import style from './Tooltip.module.scss';
import Icon from '../Icon/Icon';

const Tooltip = ({ children }) => {
  const outside = useRef();
  const [tooltip, setTooltip] = useState(false); // Логика тултипа
  const handleTooltip = () => {
    setTooltip(!tooltip);
  };
  // Проверяет был ли сделан клик за пределами тултипа
  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setTooltip(false);
  };
  // Добавил обработчик событий при первом рендере. Надо проверить нужен ли в конце колбек.
  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);
    return () => {
      getClick();
    };
  }, []);
  return (
    // Повесил реф на див, который тултип
    <div ref={outside}>
      <Icon onClick={handleTooltip} icon="more_vert" />
      {tooltip ? <div className={style.wrapper}>{children}</div> : null}
    </div>
  );
};

export default Tooltip;
