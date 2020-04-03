import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import style from './EditPost.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../actions/actionCreators';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

const EditPost = ({ onClick, id }) => {
  const newsData = useSelector((state) => state.news.data);
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
      <form onSubmit={onSubmit}>
        <span className={style.label}>Post title</span>
        <Input name="title" value={field.title} onChange={handleField} />
        <span className={style.label}>Description</span>
        <TextArea rows="7" name="body" value={field.body} onChange={handleField} />
        <div className={style.footer}>
          <Button
            data-test="modal-close"
            onClick={() => onClick(id)}
            className={style.cancel}
            children="Cancel"
          />
          <Button children="Save" className={style.button} />
        </div>
      </form>
    </>
  );
};

export default EditPost;

// TODO: `Из-за того что данные фетчатся после каждого захода на страницу,
//  форма с добавлением поста должна быть на главной странице и как-то появляться/скрываться.
//  Так же надо убрать id на сервере, айди должен браться основываясь на месте в массиве,
//  потом удобно будет через map.filter удалять.
//  Разобраться с функцией для добавления постов. Лучше все перенести на классовые компоненты.`
