import React from 'react';
import PropTypes from 'prop-types';
import style from './News.module.scss';
import Post from "../Post/Post";

// TODO: `Обратить внимание на то, что константа posts лежит внутри блока if.
//  Ночью сломал себе мозг пытаясь понять почему получал undefined из data.
//  Этим if-else я даю понять, что переменная должна создавать только когда пришли пропсы во избежание ошибок.
//  Если еще раз словишь в тестах баг с map undefined, то смотри сюда!!!`

const News = ({ data }) => {

    if (data) {
        const posts = data.map((post, index) => {
            return <Post userId={post.userId} id={index} title={post.title} body={post.body} key={index} />
        });

        return (
            <div className={style.container} data-test="news">
                {posts}
            </div>
        );
    } else {
        return null;
    }
};

News.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

export default News;