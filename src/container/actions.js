export const getMovies = () => ({
    type: 'GET_MOVIES'
});


export const setLoginResp = (data) => ({
    type: 'SET_LOGIN_RESP',
    data: data
});


export const setBookCount = (data) => ({
    type: 'SET_SEAT_BOOK_COUNT',
    data: data
});

export const setBookingStatus = (data) => ({
    type: 'SET_BOOKING_STATUS',
    data: data
});

export const selectedMovie = (data) => ({
    type: 'SET_SELECTED_MOVIE',
    data: data
});


