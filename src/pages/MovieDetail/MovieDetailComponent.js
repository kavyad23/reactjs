import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


function MovieDetailComponent(props) {

    return (
        <div>
            {props.selectedMovie?.movieName}
        </div>
    );
}

const mapStateToProps = (state) => {
    const { movieReducer } = state;
    return {
        selectedMovie: movieReducer.selectedMovie,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailComponent))
