import React, { Component } from 'react';
import styles from './App.module.css';
import Button from '../button/Button';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';
import Searchbar from '../searchbar/Searchbar';

export default class App extends Component {
    state = {
    };

    render() {
        return (
            <div className={styles.container}></div>
        )
    }
};
