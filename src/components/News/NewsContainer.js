import React, { useEffect, useState } from 'react';
import { deletePost, getNews } from '../../actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import style from './News.module.scss';
import News from './News';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import AddPost from '../AddPost/AddPost';

const NewsContainer = () => {
  const [isOpenModal, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpenModal);
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const dispatch = useDispatch();

  const removePost = (id) => {
    dispatch(deletePost(id));
  };

  const newsData = useSelector((state) => state.news.data);

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.newsHeader}>
          <h1 className={style.headline}>News</h1>
          <Button children="Add post" onClick={handleIsOpen} className={style.button} />
        </div>
        <News
          isOpenModal={isOpenModal}
          handleIsOpen={handleIsOpen}
          data={newsData}
          removePost={removePost}
        />
      </div>
      <Modal onClick={handleIsOpen} isOpen={isOpenModal} title="Add post">
        <AddPost onClick={handleIsOpen} />
      </Modal>
    </>
  );
};

export default NewsContainer;
