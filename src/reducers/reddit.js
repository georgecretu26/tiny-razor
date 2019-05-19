import {
    FETCH_SUBREDDIT, 
    FETCH_SUBREDDIT_SUCCESS, 
    FETCH_SUBREDDIT_ERROR,
    REMOVE_ITEM,
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: '',
    data: [],
    error: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT:
            return {
                ...state,
                isLoading: true,
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

        case REMOVE_ITEM:
            const id = action.id;
            return {
                ...state,
                data: state.data.filter((article) => article.id !== id)
            }
        
        default:
            return state;
    }
}
