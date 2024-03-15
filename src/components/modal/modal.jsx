import { createPortal } from "react-dom";
import {useEffect} from "react";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from 'classnames';
import PropTypes from "prop-types";
import React from "react";

const Esc = 27;
const modalRoot = document.getElementById("react-modals");

function Modal({title, onClose, children}) {

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === Esc){
        onClose();
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
}, [])


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
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
}

export default Modal;