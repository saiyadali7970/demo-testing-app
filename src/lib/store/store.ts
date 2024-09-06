import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/itemsSlice';
// store variable is a global variable.
export const makeStore = () => {
    return configureStore({
        reducer: {
            items: itemsReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];