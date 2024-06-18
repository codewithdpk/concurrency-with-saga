import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchBreeds } from '../services/getAllBreeds';
import { breedsFetchFailed, breedsFetchSuccess } from './breedSlice';

function* getBreeds() {
  try {
    const data = yield call (fetchBreeds);
    yield put(breedsFetchSuccess(data));
  } catch (error) {
    yield put(breedsFetchFailed(error.message));
  }
}

function* breedSagas() {
  yield takeEvery('breeds/breedsFetchStarted', getBreeds);
}

export default breedSagas;