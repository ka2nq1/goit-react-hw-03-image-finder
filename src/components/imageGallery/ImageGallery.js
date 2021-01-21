import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import Modal from '../modal/Modal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        largeImageUrl: null,
    };

    setLargeImage = url => {
        this.setState({ largeImageUrl: url })
    }

    toogleModal = () => {
        this.setState(state => ({ showModal: !state.showModal }))
        this.state.largeImageUrl && this.setState({ largeImageUrl: null })
    };

    render() {
        const { showModal, largeImageUrl } = this.state;
        const { articles } = this.props;

        return (
            <>
                <ul className={styles.galleryList}>
                    <ImageGalleryItem onOpen={this.toogleModal} onSetImg={this.setLargeImage} articles={articles}/>
                </ul>
                {showModal && <Modal onClose={this.toogleModal} onLargeImg={largeImageUrl}/>}
            </>    
        )
    };
};