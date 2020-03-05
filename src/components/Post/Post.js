import React from 'react';
import style from './Post.module.scss';
import PropTypes from 'prop-types';

const Post = ({ userId, title, body, id }) => {
    if (userId && id && title && body) {
        return (
            <div className={style.post} data-test="post">
                <h2 data-test="userId">Id пользователя: {userId}</h2>
                <h4>Заголовок: {title}</h4>
                <p>Номер поста: {id}</p>
                <p>Текст новости: {body}</p>
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
    id: PropTypes.number
};

export default Post;