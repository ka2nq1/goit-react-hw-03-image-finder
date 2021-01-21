import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        inputValue: ''
    }

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.inputValue)
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <div className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                    <button type='submit' className={styles.searchBtn}></button>
                    <input className={styles.searchInput}
                        value={this.state.inputValue}
                        type='text' autoComplete='off'
                        autoFocus placeholder='search images and photos'
                        onChange={this.handleChange} />
                </form>
            </div>
        );
    };
};