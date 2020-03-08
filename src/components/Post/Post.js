import React from 'react';
import style from './Post.module.scss';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";

const Post = ({ userId, title, body, image, id }) => {
    if (userId && id && title && body && image) {
        return (
            <div className={style.post} data-test="post">
                <div className={style.image} style={{backgroundImage: `url(${image})`}}/>
                <div className={style.body}>
                   <div className={style.postHead}>
                      <div>
                          <p className={style.num}>№{id}</p>
                          <p className={style.userId} data-test="userId">User ID {userId}</p>
                      </div>
                       <div className={style.icon}>
                           <Icon icon="more_vert" />
                       </div>
                   </div>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.text}>{body}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

Post.propTypes = {
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string
};

export default Post;