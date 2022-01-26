import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from '../pages/Login/LoginComponent';
import MovieDetailComponent from '../pages/MovieDetail/MovieDetailComponent';
import MoviesComponent from '../pages/Movies/MoviesComponent';

export const Routes = () => (
    <Router>
        <Route exact path='/ticket-booking/'>
            <LoginComponent />
        </Route>
        <Route exact path='/ticket-booking/movies'>
            <MoviesComponent />
        </Route>
        <Route exact path='/ticket-booking/booking'>
            <MovieDetailComponent />
        </Route>
    </Router>
)