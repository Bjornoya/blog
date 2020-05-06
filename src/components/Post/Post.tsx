import React from 'react';
import style from './Post.module.scss';
import Tooltip from '../Tooltip/Tooltip';
import MenuItem from '../Menu/MenuItem';
import Menu from '../Menu/Menu';

interface IPostProps {
  userId: number;
  title: string;
  body: string;
  id: number;
  image: string;
  onClick: (id: number) => void;
  removePost: (id: number) => void;
  savePost: (id: number) => void;
}

const Post = ({ userId, title, body, image, id, removePost, savePost, onClick }: IPostProps) => {
  return (
    <div className={style.post} data-test="post">
      <img src={image} className={style.image} alt="" />
      <div className={style.body}>
        <div className={style.postHead}>
          <div>
            <p className={style.num}>№{id}</p>
            <p className={style.userId} data-test="userId">
              User ID {userId}
            </p>
          </div>
          <div className={style.icon}>
            <Tooltip>
              <Menu>
                <MenuItem icon="edit" onClick={() => onClick(id)}>
                  Edit post
                </MenuItem>
                <MenuItem icon="delete" onClick={() => removePost(id)}>
                  Delete post
                </MenuItem>
                <MenuItem icon="favorite" onClick={() => savePost(id)}>
                  Like post
                </MenuItem>
              </Menu>
            </Tooltip>
          </div>
        </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{body}</p>
      </div>
    </div>
  );
};

export default Post;
