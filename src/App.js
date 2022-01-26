import './App.css';
import HomeComponent from './pages/HomeComponent'
import ChildComponent from './pages/ChildComponent';
import { Router, Route, Switch, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";

function App(props) {
  const customHistory = createBrowserHistory();
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={HomeComponent} history={customHistory}>
        </Route>
        <Route path="/child" component={ChildComponent} history={customHistory}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
