import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layout/userSlice';
import addressSlice from '../layout/userSlice';
import detailSlice from '../layout/detailSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import productSlice from '../layout/productSlice';


const reducers = combineReducers({
    user: userSlice,
    address : addressSlice,
    detail : detailSlice,
    product : productSlice
    
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({

    reducer: persistedReducer,
    middleware: [thunk]
});