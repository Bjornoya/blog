import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.scss';
import Button from "../Button/Button";


const Modal = ({ children, isOpen, title, onClick }) => {

        if (isOpen) {
                return (
                        <div className={style.overlay}>
                        <div className={style.modal}>
                            <div className={style.header}>
                                <div data-test="modal-title" className={style.title}>{title}</div>
                                <div onClick={onClick} className={style.close}> </div>
                            </div>
                            <div className={style.body}>
                                { children }
                            </div>
                            <div className={style.footer}>
                                <Button data-test="modal-close" onClick={onClick} className={style.cancel} children="Cancel" />
                                <Button children="Submit" className={style.button} />
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