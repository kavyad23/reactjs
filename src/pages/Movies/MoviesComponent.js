import React from "react";
import './Movies.css'
import { getMovies } from '../../container/actions';
import MovieTile from './MovieTile';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectedMovie } from '../../container/actions';

class MoviesComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovies();
    }

    openMovieDetailPage = (movie) => {
        this.props.selectedMovie(movie);
        this.props.history.push('/ticket-booking/booking');
    }

    renderMovieList = () => {
        return this.props.movieList.map((movie, index) => <MovieTile key={index} {...movie} onMovieClick={() => this.openMovieDetailPage(movie)} />);
    }

    render() {
        return (
            <React.Fragment>
                <div className="movie-container">
                    {this.renderMovieList()}
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    const { movieReducer } = state;
    return {
        movieList: movieReducer?.movieList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies()),
        selectedMovie: (params) => dispatch(selectedMovie()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesComponent))