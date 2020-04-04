import React from 'react';
import style from './Post.module.scss';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';
import MenuItem from '../Menu/MenuItem';
import Menu from '../Menu/Menu';

const Post = ({ userId, title, body, image, id, removePost, onClick }) => {
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

Post.propTypes = {
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
};

export default Post;
