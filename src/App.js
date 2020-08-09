import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import TripDetail from './pages/TripDetail'
import Pay from './pages/Pay'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
import Trip from './pages/Trip'
import TripAdd from './pages/TripAdd'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trip/add">
          <TripAdd />
        </Route>
        <Route path="/trip">
          <Trip />
        </Route>
        <Route path="/detail-trip">
          <TripDetail />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;