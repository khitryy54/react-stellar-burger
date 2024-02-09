import { createPortal } from "react-dom";
import { useState, useEffect} from "react";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from 'classnames';
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal({title, onClose, children}) {

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        onClose();
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[])


  return createPortal(
    <>
        <div className={cn('pl-10 pr-10 pt-10 pb-15', styles.modal)}>
            <div className={styles.header}>
              <h2 className={cn(styles.title, "text text_type_main-large")}>{title}</h2>
              <a href="#"><CloseIcon className={cn(styles.close)} onClick={onClose} /></a>
            </div>
            {children}
        </div>
        <ModalOverlay onClick={onClose}/>
    </>, modalRoot
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired
}

export default Modal;