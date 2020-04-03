import React from 'react';
import style from './Post.module.scss';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";
import Tooltip from "../Tooltip/Tooltip";
import Modal from "../Modal/Modal";
import EditPost from "../EditPost/EditPost";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/actionCreators";

const Post = ({ userId, title, body, image, isOpen, id, handleTooltip, removePost, handleIsOpen, isOpenModal }) => {

    const dispatch = useDispatch();
    const handleModal = (id) => {
        dispatch(openModal(id))
    };
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
                           <Icon onClick={() => handleTooltip(id)} icon="more_vert" />
                           <Tooltip handleTooltip={handleTooltip} handleIsOpen={handleIsOpen} isOpen={isOpen} removePost={removePost} id={id} handleModal={handleModal}/>
                       </div>
                   </div>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.text}>{body}</p>
                </div>
                <Modal onClick={handleModal} id={id} isOpen={isOpenModal} title="Edit post">
                    <EditPost onClick={handleModal} id={id}/>
                </Modal>
            </div>
        );
};

Post.propTypes = {
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string
};

export default Post;