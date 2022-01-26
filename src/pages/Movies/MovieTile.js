import React from "react";
import './Movies.css'
import movie from '../../common/img/movie.jpg';

const MovieTile = (props) => {
    const { id, movieName, category, imgUrl, onMovieClick } = props;

    return (
        <div className="movie-box">
            <img src={movie} className="movie-image" />
            <div className="movie-category">{category}</div>
            <div className="movie-title">{movieName}</div>
            <button className="button-10" onClick={onMovieClick}>Book</button>
        </div>
    )
};

export default MovieTile;