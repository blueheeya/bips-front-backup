//Redux store 설정
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import menuReducer from './menuSlice';

const store = configureStore({
    reducer: {
        data: dataReducer,
        menu: menuReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
