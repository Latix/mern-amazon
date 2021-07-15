import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from "redux-logger";
import { cartReducer } from './reducers/cartReducers';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { userRegisterReducer, userSignInReducer } from './reducers/userReducers';
import { orderCreateReducers, orderDetailsReducers } from './reducers/orderReducers';

const initialState = {};

const middleWares = [
    thunk
];

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['navigation'] will not be persisted
  }

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSignInReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducers,
    orderDetails: orderDetailsReducers
});

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if(process.env.NODE_ENV === 'development')
{
    middleWares.push(logger);
}

export const store = createStore(persistedReducer, initialState, composeEnhancer(applyMiddleware(...middleWares)));
export const persistor = persistStore(store);
