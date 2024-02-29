// src/components/Button/Button.js
import React from 'react';
import axios from 'axios';
import styles from './Button.module.css';

const Button = ({ query, setPage, setImages }) => {
  const loadMoreImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${
          setPage + 1
        }&key=YOUR_API_KEY&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more images:', error);
    }
  };

  return (
    <button type="button" className={styles.Button} onClick={loadMoreImages}>
      Load more
    </button>
  );
};

export default Button;
