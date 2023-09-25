import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import modalReducer from './modal/reducer';
import userReducer from './user/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const reducer = combineReducers({
  user: userReducer,
  modal: modalReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
