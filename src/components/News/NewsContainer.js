import React, { useEffect, useState } from 'react';
import { deletePost, getNews, selectPost } from '../../store';
import { useToggle } from '../../hooks/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import style from './News.module.scss';
import News from './News';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import AddPost from '../AddPost/AddPost';
import EditPost from '../EditPost/EditPost';
import { getPosts } from '../../utils/selectors';
import FavoritePosts from '../FavoritePosts/FavoritePosts';

let postId = null;

const NewsContainer = () => {
  const [addPostModal, toggleAddPostModal] = useToggle(false);
  // Небольшой костыль с подъемом состояния id поста...
  const [editIsOpen, setEditIsOpen] = useState(false);
  const handleEditIsOpen = (id) => {
    setEditIsOpen(!editIsOpen);
    postId = id;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const removePost = (id) => {
    dispatch(deletePost(id));
  };

  const savePost = (id) => {
    dispatch(selectPost(id));
  };

  const newsData = useSelector(getPosts);

  return (
    <>
      <Header />
      <div className={style.container}>
        <FavoritePosts onClick={handleEditIsOpen} removePost={removePost} savePost={savePost} />
        <div className={style.newsHeader}>
          <h1 className={style.headline}>News</h1>
          <Button children="Add post" onClick={toggleAddPostModal} className={style.button} />
        </div>
        <News onClick={handleEditIsOpen} data={newsData} removePost={removePost} savePost={savePost} />
      </div>
      <Modal onClick={toggleAddPostModal} isOpen={addPostModal} title="Add post">
        <AddPost onClick={toggleAddPostModal} />
      </Modal>
      <Modal onClick={handleEditIsOpen} isOpen={editIsOpen} title="Edit post">
        <EditPost id={postId} onClick={handleEditIsOpen} />
      </Modal>
    </>
  );
};

export default NewsContainer;
