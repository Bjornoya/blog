import React, { useEffect } from 'react';
import { getNews } from "../../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import News from "./News";
import Header from "../Header/Header";
import AddPost from "../AddPost/AddPost";

const NewsContainer = () => {

    useEffect(() => {
        dispatch(getNews())
    }, []);

    const dispatch = useDispatch();

    const newsData = useSelector(state => state.news.data);

    return (
        <>
            <Header />
            <AddPost />
            <News data={newsData} />
        </>
    );
};

export default NewsContainer;