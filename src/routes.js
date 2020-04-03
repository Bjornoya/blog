import React from 'react';
import App from './App';
import { Route, Switch } from 'react-router-dom';
import NewsContainer from './components/News/NewsContainer';
import About from './routes/About/About';
import NotFound from './routes/NotFound/NotFound';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={NewsContainer} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </App>
  );
};

export default Routes;
