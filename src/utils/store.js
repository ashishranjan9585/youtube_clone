import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './AppSlice';
import ChatSlice from './ChatSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer : {
        app : AppSlice,
        chat : ChatSlice,
        search : searchSlice,
    }
})
export default store;
