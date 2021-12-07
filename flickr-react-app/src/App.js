import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import apiKey from './config';
//components
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';

const photos = [];

class App extends Component {
  render () {
    return (
     
      <Router>
        <div>
          <Nav />
          <PhotoContainer photos = { photos } />
            {/* <Route exact path='/' />
            <Route path='/kitties' />
            <Route path='/puppies' />
            <Route path='/igauanas' /> */}
        </div>
      </Router>

    );
  }
}

export default App;
