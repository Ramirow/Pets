import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {About} from './views/about';
import {Home} from './views/home';
import {Pets} from './views/pets'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './Navbar.css' 
import {Add} from './views/add'
import {Edit} from './views/edit'

export const NavigationBar = () => (
    <div>
    <h4> Pets Project</h4>
      <Router>
           <div className = "menu">   
                <Link to="/home" style={{paddingRight:20,marginLeft:10}}>Home</Link>
                <Link to="/about" style={{paddingRight:20}}>About Us</Link>
                <Link to="/pets">MyPets</Link>
              
            <Switch>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/pets' component={Pets}></Route>
              <Route exact path='/add' component={Add}></Route>
              <Route exact path='/edit' component={Edit}></Route>
            </Switch>
          </div>
       </Router>
    </div>
)
