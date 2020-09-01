import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Countires from './components/Countries/Countries';
import NotFound from './components/NotFound/NotFound';
import Faq from './components/FAQ/Faq';
import EachCountry from './components/EachCountry/EachCountry';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/countries">
            <Countires/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/faq">
            <Faq/>
          </Route>
          <Route path="/country/:countryName">
            <EachCountry/>
          </Route>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
