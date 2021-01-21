import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <img src={this.props.onLargeImg} alt='#'/>
                </div>
            </div>
        )
    };
};