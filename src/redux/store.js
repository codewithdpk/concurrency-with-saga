import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import breedReducer from '../redux/breedSlice'
import breedSagas from './breedSagas';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    breeds: breedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(breedSagas);

export default store;