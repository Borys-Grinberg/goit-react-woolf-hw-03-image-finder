import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image.largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img
        src={image.webformatURL}
        alt={image.id}
        className={styles['ImageGalleryItem-image']}
      />
    </li>
  );
};

export default ImageGalleryItem;
