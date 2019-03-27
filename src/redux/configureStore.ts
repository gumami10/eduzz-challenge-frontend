import * as Redux from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from './reducers/moviesReducer';

const rootReducer = Redux.combineReducers({
    movies: moviesReducer,
})

export default function configureStore() {
    return Redux.createStore(
        rootReducer,
        Redux.applyMiddleware(thunk)
    )
}
