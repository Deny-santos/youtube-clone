import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import videoReducer from "./videoSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
// import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducers = combineReducers({ user: userReducer, video: videoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    // user: userReducer,
    // video: videoReducer
    //dont gonna use like this one
    reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    
})

export const persistor = persistStore(store)