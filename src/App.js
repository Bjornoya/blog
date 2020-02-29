import React from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import News from "./components/News/News";
import { useSelector } from "react-redux";


function App() {

    const newsData = useSelector(state => state.news.data);

  return (
    <div>
      <Header />
      <News data={newsData} />
      <Post />
    </div>
  );
}

export default App;
