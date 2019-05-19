import {
    FETCH_SUBREDDIT, 
    FETCH_SUBREDDIT_SUCCESS, 
    FETCH_SUBREDDIT_ERROR,
} from './types';
import { formatResponse } from './utils';

import axios from 'axios';

const domain = 'https://www.reddit.com/r/';
const subreddit = 'AdviceAnimals/';
const format ='.json';

const endpoint = `${domain}${subreddit}${format}`

export const fetchSubreddit = () => dispatch => {
    dispatch({ type: FETCH_SUBREDDIT, isLoading: true });
    axios.get(endpoint)
    .then((response) => {
        console.log(response);
        const { children: articles } = response.data.data;
        const pritierArray = formatResponse(articles);
        dispatch({ type: FETCH_SUBREDDIT_SUCCESS, data: pritierArray });
    })
    .catch((error) => {
        console.log(error);
        dispatch({ type: FETCH_SUBREDDIT_ERROR, error});
    });
};
