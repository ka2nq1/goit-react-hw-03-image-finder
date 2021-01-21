import React from 'react';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ onOpen, articles, onSetImg }) {
    return (
        articles.map(({id, webformatURL, largeImageURL}) =>
            <li className={styles.galleryItem} key={id}>
                <img src={webformatURL} alt='#' className={styles.galleryImage} onClick={() => onOpen(onSetImg(largeImageURL))}/>
            </li>)
    );
};

export default ImageGalleryItem