import { configureStore } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage'
import { filterReducer, authReducer, contactsReducer } from './reducers'
//import { phonebookApi } from './ContactsSlice'
import { connectionsApi } from './PhonebookSlice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
        //[phonebookApi.reducerPath]: phonebookApi.reducer,
        [connectionsApi.reducerPath]: connectionsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
    [...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }), connectionsApi.middleware],
    devTools: true,

})

export const persistor = persistStore(store)