import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import Description from './components/Description'
import LocalRep from './components/LocalRep'
import MyRep from './components/MyRep'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Description path="/description" component={Description} />
    <MyRep path="/myrepresentatives" component={MyRep} />
    <LocalRep path="/localrepresentatives" component={LocalRep} />

  </Route>
)
