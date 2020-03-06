import React from 'react';
import Button from "../Button/Button";
import style from './AddPost.module.scss';
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/actionCreators";

const AddPost = () => {

    const dispatch = useDispatch();
    let data = {};
    const handleInput = (event) => {
        data[event.target.name] = event.target.value;
    };


    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addPost(data));
        event.target.reset();
    };


    return (
        <>
            <div className={style.form}>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className={style.line}>
                        <span className={style.name}>Post title</span>
                        <input
                            onChange={(event) => handleInput(event)}
                            name="title"
                            value={data.title}
                            type="text"
                            data-test="title"/>
                    </div>
                    <div className={style.line}>
                        <span className={style.name}>Post body</span>
                        <textarea
                            name="body"
                            value={data.body}
                            onChange={(event => handleInput(event))}>
                        </textarea>
                    </div>
                    <Button>Add Post</Button>
                </form>
            </div>
        </>
    );
};

export default AddPost;


// TODO: `Из-за того что данные фетчатся после каждого захода на страницу,
//  форма с добавлением поста должна быть на главной странице и как-то появляться/скрываться.
//  Так же надо убрать id на сервере, айди должен браться основываясь на месте в массиве,
//  потом удобно будет через map.filter удалять.
//  Разобраться с функцией для добавления постов. Лучше все перенести на классовые компоненты.`