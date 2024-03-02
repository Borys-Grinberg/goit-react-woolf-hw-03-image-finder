// src/components/Modal/Modal.jsx
import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleKeyDownWrapper = e => handleKeyDown(e);
    window.addEventListener('keydown', handleKeyDownWrapper);

    return () => {
      window.removeEventListener('keydown', handleKeyDownWrapper);
    };
  }, [onClose]);

  return (
    <div className={styles.Overlay} onClick={handleClose}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
