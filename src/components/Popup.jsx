import React from 'react';
import styles from 'styles/components/Popup.module.scss';
import { AiOutlineClose} from 'react-icons/ai';

export default function Popup({ children, handleClose }) {
  return (
    <div className={styles.popup} onClick={() => handleClose()}>
      <div
        className={styles.popup__container}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          onClick={() => handleClose()} 
          className={styles.popup__closeIcon}
        />
        {children}
      </div>
    </div>
  );
}
