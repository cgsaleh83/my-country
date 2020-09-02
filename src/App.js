import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Time from './Components/Time/Time';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Router>
         <Switch>

           <Route exact path="/">
            <Home />
           </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/time">
              <Time />
            </Route>

            <Route path='/area/:countryDetail'>
                <CountryDetail />
            </Route>

           <Route path="*">
            <NoMatch />
           </Route>
           
         </Switch>
       </Router>
      </header>
    </div>
  );
}

export default App;
