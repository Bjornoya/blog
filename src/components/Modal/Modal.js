import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';


const Modal = ({ children, isOpen, title, onClick, id }) => {

        if (isOpen) {
                return (
                        <div className={style.overlay}>
                        <div className={style.modal}>
                            <div className={style.header}>
                                <div data-test="modal-title" className={style.title}>{title}</div>
                                <div onClick={() => onClick(id)} className={style.close}> </div>
                            </div>
                            <div className={style.body}>
                                { children }
                            </div>
                        </div>
                    </div>
                );
        } else {
            return null
        }
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string
};

export default Modal;