const initialState = {
    movieList: [],
    loginResp: {},
    bookCount: 0,
    bookingStatus: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES_DATA':
            return { ...state, movieList: action.data }

        case 'SET_LOGIN_RESP':
            return { ...state, loginResp: action.data }

        case 'SET_SEAT_BOOK_COUNT':
            return { ...state, bookCount: action.data }

        case 'SET_BOOKING_STATUS':
            return { ...state, bookingStatus: action.data }

        default:
            return state;
    }
};

export default reducer;