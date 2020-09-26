import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';

const initialState = {};
const middlewares = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))

)

export const persistor = persistStore(store);