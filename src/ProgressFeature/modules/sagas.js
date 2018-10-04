import {call, put, takeEvery, all} from 'redux-saga/effects'
import API from '../../client'
import {increment, decrement, reachedMax, reachedMin, reset} from './actions'

export function* incrementRequest() {
    try {
        yield call(API.increment);
        yield put(increment())
    } catch {
        yield put(reachedMax())
    }
}

export function* decrementRequest() {
    try {
        yield call(API.decrement);
        yield put(decrement())
    } catch {
        yield put(reachedMin())
    }
}


export function* resetRequest() {
        yield call(API.reset);
        yield put(reset())
}

export function* watchIncrement() {
    yield takeEvery('INCREMENT_REQUESTED', incrementRequest)
}

export function* watchDecrement() {
    yield takeEvery('DECREMENT_REQUESTED', decrementRequest)
}

export function* watchReset() {
    yield takeEvery('RESET_REQUESTED', resetRequest)
}

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ])
}