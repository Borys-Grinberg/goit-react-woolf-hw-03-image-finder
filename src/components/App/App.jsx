// src/components/App/App.jsx
import React, { useState } from 'react';
import Searchbar from '..//Searchbar/Searchbar';
import ImageGallery from '..//ImageGallery/ImageGallery';
import Button from '..//Button/Button';
import Loader from '..//Loader/Loader';
import Modal from '..//Modal/Modal';
import styles from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setSelectedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery
        query={query}
        page={page}
        setImages={setImages}
        onImageClick={handleImageClick}
      />
      {images.length > 0 && (
        <Button query={query} setPage={setPage} setImages={setImages} />
      )}
      {isLoading && <Loader />}
      {selectedImageUrl && (
        <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
