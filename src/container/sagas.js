import { put, takeLatest, all } from 'redux-saga/effects';


function* getLoginResp() {

    const json = yield fetch('/getmovies.json')
        .then(response => response.json());

    yield put({ type: "MOVIES_DATA", json: json.articles || [{ error: json.message }] });
}

function* getMovies() {

    const json = yield fetch('/getmovies.json')
        .then(response => response.json());

    yield put({ type: "SET_MOVIES_DATA", json: json.articles || [{ error: json.message }] });
}


function* bookMovie() {

    const json = yield fetch('/getmovies.json')
        .then(response => response.json());

    yield put({ type: "SET_SEAT_BOOK_COUNT", json: json.articles || [{ error: json.message }] });
    yield put({ type: "SET_BOOKING_STATUS", json: json.articles || [{ error: json.message }] });
    
}

function* actionWatcher() {
    yield takeLatest('LOGIN_VALID', getLoginResp);
    yield takeLatest('GET_MOVIES', getMovies);
    yield takeLatest('BOOK_MOVIE', bookMovie);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}