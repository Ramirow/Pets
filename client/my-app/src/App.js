import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NavigationBar} from './components/Navbar/Navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
       <React.Fragment>
  <Router>
    <NavigationBar />
  </Router>
</React.Fragment>
    </div>
  );
}

export default App;
