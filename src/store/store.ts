import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from '@/middlewares/listenerMiddleware';
import { apiSlice } from './api/apiSlice';
import authReducer from './features/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(listenerMiddleware.middleware)
            .concat(apiSlice.middleware),
});

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;

export default store;
