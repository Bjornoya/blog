import React from 'react';
import style from './App.module.scss';
import About from "./routes/About/About";
import NewsContainer from "./components/News/NewsContainer";
import { Route, Switch } from "react-router-dom";
import NotFound from "./routes/NotFound/NotFound";
import Contact from "./routes/Contact/Contact";


function App() {

  return (
    <div>
        <Switch>
            <Route exact path="/" component={NewsContainer} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
