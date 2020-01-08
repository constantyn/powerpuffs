import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import Show from './pages/Show';
import Episode from './pages/Episode';

export default () => (
  <BrowserRouter>
    <div className="container">
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Link className="navbar-brand" to="/">
          RTL - The Powerpuff Girls
        </Link>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Show} />
        <Route
          path="/:id"
          render={({ match }) => <Episode id={match.params.id} />}
        />
      </Switch>
    </div>
  </BrowserRouter>
);
