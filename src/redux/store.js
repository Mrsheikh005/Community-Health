import { combineReducers, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import { languageReducer, notificationsReducer, cartReducer, currencyReducer, profileReducer } from "./reducers"
import { notificationConfig, languageConfig, cartConfig, currencyConfig, rootPersistConfig, profilePersistConfig } from "./persistConfig"


const rootReducer = combineReducers({ languageReducer: persistReducer(languageConfig, languageReducer), notificationsReducer: persistReducer(notificationConfig, notificationsReducer), cartReducer: persistReducer(cartConfig, cartReducer), currencyReducer: persistReducer(currencyConfig, currencyReducer), profileReducer: persistReducer(profilePersistConfig, profileReducer) })

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)
export { store, persistor }