import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginComponent from '../pages/Login/LoginComponent';
import MovieDetailComponent from '../pages/MovieDetail/MovieDetailComponent';
import MoviesComponent from '../pages/Movies/MoviesComponent';
import ConfirmComponent from '../pages/Confirm/ConfirmComponent'

export const Routes = () => (
    <Router >
        <Route exact path='/ticket-booking/'>
            <LoginComponent />
        </Route>
        <Route exact path='/ticket-booking/movies'>
            <MoviesComponent />
        </Route>
        <Route exact path='/ticket-booking/booking'>
            <MovieDetailComponent />
        </Route>
        <Route exact path='/ticket-booking/confirm'>
            <ConfirmComponent />
        </Route>
        <Route exact path="/">
            <Redirect to="/ticket-booking/" />
        </Route>
    </Router>
)