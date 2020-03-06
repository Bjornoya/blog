import React from 'react';
import style from './App.module.scss';


const App = ({children}) => {

  return (
    <div className={style.body}>
        {children}
    </div>
  );
};

export default App;
