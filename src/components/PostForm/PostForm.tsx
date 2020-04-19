import React from 'react';
import style from './PostForm.module.scss';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

interface IPostFormProps {
  onSubmit: () => void;
  onClick: () => void;
  onChange: () => void;
  field: {
    title: string;
    body: string;
    id?: string;
  };
}

const PostForm = ({ onSubmit, onClick, onChange, field }: IPostFormProps) => {
  console.log(typeof field)
  return (
    <>
      <form onSubmit={onSubmit}>
        <span className={style.label}>Post title</span>
        <Input name="title" value={field.title} onChange={onChange} />
        <span className={style.label}>Description</span>
        <TextArea rows={7} name="body" value={field.body} onChange={onChange} />
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
