import React from 'react';
import styles from './Loader.module.css';

function Loader({message}) {
    return (
        <div className={styles.loader}>{message}</div>
    )
}

export default Loader;