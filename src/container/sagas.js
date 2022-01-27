import { put, takeLatest, all } from 'redux-saga/effects';


function* getLoginResp() {

    const json = yield fetch('/getmovies.json')
        .then(response => response.json());

    yield put({ type: "MOVIES_DATA", json: json.articles || [{ error: json.message }] });
}

function* getMovies() {
    console.log('getMovies')
    const movieResp = yield fetch('http://localhost:3001/getMovies')
        .then(function (response) {
            console.log(response)
            return response.json();
        });
    yield put({ type: "SET_MOVIES_DATA", data: movieResp });
}

function* getTheatreList() {
    console.log('getTheatreList')
    const thrResp = yield fetch('http://localhost:3001/theatreList')
        .then(function (response) {
            console.log(response)
            return response.json();
        });
    yield put({ type: "SET_THEATER_DATA", data: thrResp });
}

function* getAvailSeats() {
    const thrResp = yield fetch('http://localhost:3001/seatingData')
        .then(function (response) {
            console.log(response)
            return response.json();
        });
    yield put({ type: "SET_AVAIL_SEATS", data: thrResp });
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
    yield takeLatest('GET_THEATRES', getTheatreList);
    yield takeLatest('GET_AVAIL_SEATS', getAvailSeats);
    
    
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}