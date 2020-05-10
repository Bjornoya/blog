import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedPosts } from '../../utils/selectors';
import Post from '../Post/Post';
import image from '../../assets/img/iceland.jpg';
import style from './FavoritePosts.module.scss';

interface IPosts {
  onClick: (id: number) => void;
  removePost: (id: number) => void;
  savePost: (id: number) => void;
}

const FavoritePosts = ({ removePost, savePost, onClick }: IPosts) => {
  const data = useSelector(getSelectedPosts);
  const posts = data.map((post: any, index: number) => {
    return (
      <Post
        userId={post.userId}
        id={index}
        title={post.title}
        body={post.body}
        image={image}
        key={post.id}
        removePost={removePost}
        savePost={savePost}
        onClick={onClick}
      />
    );
  });

  if (data[0]) {
    return (
      <>
        <h2 className={style.headline}>Favorite Posts</h2>
        <div className={style.posts} data-test="news">
          {posts.reverse()}
        </div>
      </>
    );
  } else {
    return null
  }
};

export default FavoritePosts;