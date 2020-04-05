import React from 'react';
import style from './PostForm.module.scss';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

const PostForm = ({ onSubmit, onClick, field, handleField }) => {
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

export default PostForm;
