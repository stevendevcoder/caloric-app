import React from 'react';
import styles from 'styles/components/Popup.module.scss';
export default function Popup({ children, handleClose }) {
  return (
    <div className={styles.popup} onClick={() => handleClose()}>
      <div
        className={styles.popup__container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
