import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice';
import gameReducer from './features/gameSlice';

const store = configureStore({
    
    reducer: userReducer, gameReducer


})


export default store;