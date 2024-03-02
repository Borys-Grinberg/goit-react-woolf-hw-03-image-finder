// components/ImageGallery/ImageGallery.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ query, onImageClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=1&key=37408613-d3e7a4c0184cf3ce3e63dcb61&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(response.data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [query]);

  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
