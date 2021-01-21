import React, { Component } from 'react';
// ----------------------------------------------
import Button from '../button/Button';
import ImageGallery from '../imageGallery/ImageGallery';
import Loader from '../loader/Loader';
import Searchbar from '../searchbar/Searchbar';
// -----------------------------------------------
import articlesApi from '../../utils/articlesApi';
import styles from './App.module.css';
// ------------------------------------------------
export default class App extends Component {
    state = {
        articles: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchArticles();
        }

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    fetchArticles = () => {
        this.setState({ loading: true })
        articlesApi
            .fetchArticlesWithQuery(this.state.searchQuery, this.state.page)
            .then(articles => this.setState(prevState => ({ articles: [...prevState.articles, ...articles], page: prevState.page + 1 })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    handleSearchFormSubmit = query => {
        this.setState({ searchQuery: query, page: 1, articles: [] })
    };
    
    render() {
        const { articles, loading, error } = this.state;

        return (
            <div className={styles.container}>
                <Searchbar onSubmit={this.handleSearchFormSubmit}/>
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                {articles.length > 0 && (
                    <ImageGallery articles={articles}/>
                )}
                {loading && <Loader message='Loading...' />}
                {articles.length > 0 && !loading && (
                    <Button loadMore={this.fetchArticles}/>
                )}
            </div>
        )
    }
};
