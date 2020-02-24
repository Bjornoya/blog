import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ userId, id, title, body }) => {
    if (userId && id && title && body) {
        return (
            <div data-test="post">
                <h2>Id пользователя: {userId}</h2>
                <p data-test="postId">Номер поста: {id}</p>
                <h4>Заголовок: {title}</h4>
                <p>Текст новости: {body}</p>
            </div>
        );
    } else {
        return null;
    }
};

Post.propTypes = {
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Post;