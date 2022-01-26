import { combineReducers } from 'redux';
import movieReducer from './container/reducers';

const mainReducer = combineReducers({
    movieReducer: movieReducer
});

export default mainReducer;
