import React from 'react';
import style from './App.module.scss';
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

const posts = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };

function App() {
  return (
    <div>
      <Header />
      <Post {...posts} />
    </div>
  );
}

export default App;
