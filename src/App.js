import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Trip from './pages/Trip'
import BookNow from './pages/BookNow'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trip">
          <Trip />
        </Route>
        <Route path="/booknow">
          <BookNow />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;