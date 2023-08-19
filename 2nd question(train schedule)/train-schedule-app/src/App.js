
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrainsPage from './AllTrainsPage';
import SingleTrainPage from './SingleTrainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrainsPage} />
        <Route path="/train/:trainNumber" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
}

export default App;

