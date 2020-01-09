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
          RTL trial
        </Link>
      </Navbar>

      <Switch>
        <Route
          exact
          path="/:showId?"
          render={({ match }) => <Show showId={match.params.showId} />}
        />
        <Route
          path="/:showId/episode/:episodeId"
          render={({ match }) => {
            const { showId, episodeId } = match.params || {};
            return <Episode showId={showId} episodeId={episodeId} />;
          }}
        />
      </Switch>
    </div>
  </BrowserRouter>
);
