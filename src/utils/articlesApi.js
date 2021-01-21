/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page) => {
    return axios
        .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=19533691-71e0a15ad94cf623e7f323fff&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits)
};

export default {fetchArticlesWithQuery};