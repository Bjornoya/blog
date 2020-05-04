import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../store';
import PostForm from '../PostForm/PostForm';
import { getPosts } from '../../utils/selectors';

const EditPost = ({ onClick, id }) => {
  const newsData = useSelector(getPosts);
  const [field, setField] = useState({
    title: '',
    body: '',
    id: '',
  });

  useEffect(() => {
    setField({
      title: newsData[id].title,
      body: newsData[id].body,
      id: newsData[id].id - 1,
    });
  }, []);
  const handleField = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(editPost(field, id));
    onClick(id); // Toggle isOpen
  };

  return (
    <>
      <PostForm onClick={onClick} onSubmit={onSubmit} field={field} onChange={handleField} />
    </>
  );
};

export default EditPost;

// TODO: `Из-за того что данные фетчатся после каждого захода на страницу,
//  форма с добавлением поста должна быть на главной странице и как-то появляться/скрываться.
//  Так же надо убрать id на сервере, айди должен браться основываясь на месте в массиве,
//  потом удобно будет через map.filter удалять.
//  Разобраться с функцией для добавления постов. Лучше все перенести на классовые компоненты.`
