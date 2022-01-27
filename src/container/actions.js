
export const storeLoginDetails = (data) => ({
    type: 'STORE_USER_DETAILS',
    data: data
});

export const getMovies = () => ({
    type: 'GET_MOVIES'
});

export const getTheatreList = () => ({
    type: 'GET_THEATRES'
});

export const addSeat = (data) => ({
    type: 'ADD_SEAT',
    data: data
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

export const setSelectedTheaterSeat = (data) => ({
    type: 'SET_SELECTED_THEATRE',
    data: data
});

export const getAvailSeats = (data) => ({
    type: 'GET_AVAIL_SEATS',
    data: data
});


