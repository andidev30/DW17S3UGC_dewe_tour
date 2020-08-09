import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Trip from './pages/Trip'
import Pay from './pages/Pay'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trip">
          <Trip />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;