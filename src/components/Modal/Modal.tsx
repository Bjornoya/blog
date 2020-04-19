import React from 'react';
import style from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  title: string;
  onClick: (id: number) => void;
  id: number;
  children?: any;
}

const Modal = ({ children, isOpen, title, onClick, id }: IModalProps) => {
  console.log(id)
  if (isOpen) {
    return (
      <div className={style.overlay}>
        <div className={style.modal}>
          <div className={style.header}>
            <div data-test="modal-title" className={style.title}>
              {title}
            </div>
            <div onClick={() => onClick(id)} className={style.close}>
              {' '}
            </div>
          </div>
          <div className={style.body}>{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
