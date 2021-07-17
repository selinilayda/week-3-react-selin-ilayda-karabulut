import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CharacterList from "./views/Home";
import CharacterDetail from "./views/CharacterDetail";

const Routes = () => (
  <Switch>
    <Route path="/">
      <CharacterList />
    </Route>
    <Route path="/character/:characterId">
      <CharacterDetail />
    </Route>
  </Switch>
);

export default Routes;
