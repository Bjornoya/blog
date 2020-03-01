import React, { useEffect } from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import News from "./components/News/News";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./actions/actionCreators";


function App() {

    useEffect(() => {
        dispatch(getNews())
    }, []);

    const dispatch = useDispatch();

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
