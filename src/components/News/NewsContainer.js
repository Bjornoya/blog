import React, { useEffect, useState } from 'react';
import { getNews } from "../../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import style from './News.module.scss';
import News from "./News";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import AddPost from "../AddPost/AddPost";

const NewsContainer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    };

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
                    <Button children="Add post" onClick={handleIsOpen} className={style.button} />
                </div>
                <News data={newsData} />
            </div>
            <Modal onClick={handleIsOpen} isOpen={isOpen} title="Add post">
                <AddPost onClick={handleIsOpen} />
            </Modal>
        </>
    );
};

export default NewsContainer;