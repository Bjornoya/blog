import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './AddPost.module.scss';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/actionCreators';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

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
      <form onSubmit={onSubmit}>
        <span className={style.label}>Post title</span>
        <Input name="title" value={field.title} onChange={handleField} />
        <span className={style.label}>Description</span>
        <TextArea rows="7" name="body" value={field.body} onChange={handleField} />
        <div className={style.footer}>
          <Button
            data-test="modal-close"
            onClick={onClick}
            className={style.cancel}
            children="Cancel"
          />
          <Button children="Submit" className={style.button} />
        </div>
      </form>
    </>
  );
};

export default AddPost;

// TODO: `Из-за того что данные фетчатся после каждого захода на страницу,
//  форма с добавлением поста должна быть на главной странице и как-то появляться/скрываться.
//  Так же надо убрать id на сервере, айди должен браться основываясь на месте в массиве,
//  потом удобно будет через map.filter удалять.
//  Разобраться с функцией для добавления постов. Лучше все перенести на классовые компоненты.`
