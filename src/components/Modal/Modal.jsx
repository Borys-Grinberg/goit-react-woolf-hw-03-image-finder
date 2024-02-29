// Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.Modal} onClick={onClose}>
      <div className="modal">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
