import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  // Switch,
  Route,
} from 'react-router-dom';
import apiKey from './config';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

// const photos = [];
// const apiKey1 = apiKey;

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">  
          <SearchForm />
          <Nav />
          <Routes>
            <Route exact path='/' render={ () => <PhotoContainer /> } />
            <Route path='/kitties' render={ () => <PhotoContainer /> } />
            <Route path='/puppies' render={ () => <PhotoContainer /> } />
            <Route path='/igauanas' render={ () => <PhotoContainer /> } />
          </Routes>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
