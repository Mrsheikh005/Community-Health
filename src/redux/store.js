import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { cartReducer } from './reducers';
import { cartConfig, rootPersistConfig } from './persistConfig';

const rootReducer = combineReducers({ cartReducer: persistReducer(cartConfig, cartReducer) });

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
