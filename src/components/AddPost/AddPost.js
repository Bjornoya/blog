import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/actionCreators';
import PostForm from '../PostForm/PostForm';

const AddPost = ({ onClick }) => {
  const [field, setField] = useState({
    title: '',
    body: '',
  });
  const handleField = (event) => {
    setField({
      ...field,
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost(field));
    onClick(); // Toggle isOpen
  };

  return (
    <>
      <PostForm onClick={onClick} onSubmit={onSubmit} field={field} onChange={handleField} />
    </>
  );
};

export default AddPost;

// TODO: `Из-за того что данные фетчатся после каждого захода на страницу,
//  форма с добавлением поста должна быть на главной странице и как-то появляться/скрываться.
//  Так же надо убрать id на сервере, айди должен браться основываясь на месте в массиве,
//  потом удобно будет через map.filter удалять.
//  Разобраться с функцией для добавления постов. Лучше все перенести на классовые компоненты.`
