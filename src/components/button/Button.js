import React from 'react';
import styles from './Button.module.css';

function Button({loadMore}) {
    return (
        <button className={styles.btn} onClick={loadMore}>Load more</button>
    )
}

export default Button;