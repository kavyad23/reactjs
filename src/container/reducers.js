const initialState = {
    userDetails: '',
    movieList: [],
    loginResp: {},
    bookCount: 0,
    bookingStatus: '',
    selectedMovie: '',
    theatreList: [],
    seatList: [],
    selectedSeats: [],
    totalAmount: 0,
    selectedTheatre: {},
    availableSeats: []
}

const movieReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {

        case 'STORE_USER_DETAILS':
            return { ...state, userDetails: action.data }

        case 'SET_MOVIES_DATA':
            return { ...state, movieList: action.data }

        case 'SET_LOGIN_RESP':
            return { ...state, loginResp: action.data }

        case 'SET_SEAT_BOOK_COUNT':
            return { ...state, bookCount: action.data }

        case 'SET_BOOKING_STATUS':
            return { ...state, bookingStatus: action.data }

        case 'SET_SELECTED_MOVIE':
            return { ...state, selectedMovie: action.data }

        case 'SET_THEATER_DATA':
            return { ...state, theatreList: action.data }

        case 'ADD_SEAT':
            let { availableSeats } = state;
            const index = availableSeats.findIndex(ele => ele.id === action.data.id);

            if (availableSeats[index]?.booked) {
                availableSeats[index].booked = false;
            } else {
                availableSeats[index].booked = true;
            }

            const bookedArr = availableSeats.filter(ele => ele.booked === true);

            const newCost = bookedArr?.length * availableSeats[0]?.amount || 0;
            return {
                ...state,
                availableSeats: availableSeats,
                totalAmount: newCost,
                selectedSeats: bookedArr
            }

        case 'SET_SELECTED_THEATRE':
            return { ...state, selectedTheatre: action.data }

        case 'SET_AVAIL_SEATS':
            return { ...state, availableSeats: action.data }

        default:
            return state;
    }
};

export default movieReducer;