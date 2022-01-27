import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import movie from '../../common/img/movie.jpg';
import { getTheatreList, addSeat, setSelectedTheaterSeat, getAvailSeats } from '../../container/actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Movies/Movies.css"
import { FooterDiv } from '../../container/styled';


function MovieDetailComponent(props) {

    const [theatreName, setTheatreName] = useState('');
    const [timeslotList, setTimeslotList] = useState([])
    const [dateSlot, setDateslot] = useState();
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();

    const [showSeatArrangement, setShowSeatArrangement] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    let maxDt = today.getDate() + dateSlot;
    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm;
    if (maxDt < 10) maxDt = '0' + maxDt;

    today = mm + '-' + dd + '-' + yyyy;
    const maxDate = mm + '-' + maxDt + '-' + yyyy;

    useEffect(() => {
        props.getTheatreList();
    }, [])


    const selectTheatre = (e) => {
        props.getAvailSeats();

        setTheatreName(props.theatreList?.filter(x => x.id == e.target.value)[0]);
        setTimeslotList(props.theatreList?.filter(x => x.id == e.target.value)[0]?.timeslot);
        setDateslot(props.theatreList?.filter(x => x.id == e.target.value)[0]?.advanceDateCount);
    }

    const checkSeats = (e) => {
        props.setSelectedTheaterSeat(theatreName);
        setShowSeatArrangement(true);
    }

    const onSeatClick = (seat) => {
        props.addSeat(seat);
    }

    const goToConfirmationPage = () => {
        props.history.push('/ticket-booking/confirm');
    }

    return (
        <div>
            <div className="movie-detail-page">
                <div className="movie-box">
                    <img src={movie} className="movie-image" alt="" />
                    <div className="movie-category">{props.selectedMovie?.category}</div>
                    <div className="movie-title">{props.selectedMovie?.movieName}</div>
                </div>
                <div className='movie-filters'>
                    <select onChange={(e) => selectTheatre(e)} className='float-left margin10px width20'>
                        <option value="">Select Theater</option>
                        {props.theatreList.map(theatre =>
                            <option
                                key={theatre.id}
                                name={theatre.id}
                                value={theatre.id}>
                                {theatre.name}
                            </option>
                        )}
                    </select>

                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                        minDate={new Date(today)} maxDate={new Date(maxDate)} disabled={!theatreName} />

                    <select onChange={(e) => setSelectedTimeSlot(e.target.value)} className='float-left margin10px width20' disabled={!theatreName}>
                        <option value="">Select Time</option>
                        {timeslotList?.map(timeSlt =>
                            <option
                                key={timeSlt}
                                name={timeSlt}
                                value={timeSlt}>
                                {timeSlt}
                            </option>
                        )}
                    </select>

                    <button className="button-10 marginTopZero" onClick={checkSeats}>Check Seats</button>
                </div>
                {showSeatArrangement &&
                    <div className='movie-seating'>
                        {props.availableSeats.map(d => (<div className={d.booked ? "booked-seat each-seat" : "each-seat"} key={d.id} onClick={() => onSeatClick(d)}>{d.id}</div>))}
                    </div>}
            </div>
            <FooterDiv>
                <div className='seat-display'>
                    <div className='final-seat'>
                        Seat Nos: {props.selectedSeats.map((d, index) =>
                            (<span key={d.id}>{d.id} {index + 1 !== props.selectedSeats?.length ? ', ' : ''}</span>))}
                    </div>
                    <div className='final-seat'>
                        Total Amount: {props.totalAmount}
                    </div>
                    <div className='checkout-seat'>
                        <button className="button-10 marginTopZero" onClick={goToConfirmationPage} disabled={props.totalAmount === 0}>Checkout</button>
                    </div>

                </div>
            </FooterDiv>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { movieReducer } = state;
    return {
        selectedMovie: movieReducer.selectedMovie,
        theatreList: movieReducer.theatreList,
        seatList: movieReducer.seatList,
        totalAmount: movieReducer.totalAmount,
        availableSeats: movieReducer.availableSeats,
        selectedSeats: movieReducer.selectedSeats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTheatreList: () => dispatch(getTheatreList()),
        addSeat: (data) => dispatch(addSeat(data)),
        setSelectedTheaterSeat: (data) => dispatch(setSelectedTheaterSeat(data)),
        getAvailSeats: () => dispatch(getAvailSeats()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailComponent))
