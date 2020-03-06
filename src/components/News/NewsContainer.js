import React, { useEffect } from 'react';
import { getNews } from "../../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import style from './News.module.scss';
import News from "./News";
import Header from "../Header/Header";
import Button from "../Button/Button";

const NewsContainer = () => {

    useEffect(() => {
        dispatch(getNews())
    }, []);

    const dispatch = useDispatch();

    const newsData = useSelector(state => state.news.data);

    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.newsHeader}>
                    <h1 className={style.headline}>News</h1>
                    <Button children="Add post" className={style.button} />
                </div>
                <News data={newsData} />
            </div>
        </>
    );
};

export default NewsContainer;