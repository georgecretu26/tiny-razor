import {
    FETCH_SUBREDDIT, 
    FETCH_SUBREDDIT_SUCCESS, 
    FETCH_SUBREDDIT_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: true,
    data: [],
    error: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        case FETCH_SUBREDDIT_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: action.data,
        }

        case FETCH_SUBREDDIT_ERROR:
        return {
            ...state,
            isLoading: false,
            error: action.error,
        }
        
        default:
            return state;
    }
}
