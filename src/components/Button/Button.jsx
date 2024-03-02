// Button.js

import React from 'react';
import axios from 'axios';
import styles from './Button.module.css';

const Button = ({ query, page, setPage, setImages, onLoadMore }) => {
  const loadMoreImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${
          page + 1
        }&key=37408613-d3e7a4c0184cf3ce3e63dcb61&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      onLoadMore();
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
