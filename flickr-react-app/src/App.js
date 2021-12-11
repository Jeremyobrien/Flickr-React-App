import React, { Component, Redirect } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

// const photos = [];
// const apiKey1 = apiKey;


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fdbdeac236c88bf5c414addc80826161&tags=kitties&per_page=24&format=json&nojsoncallback=1')
    .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  performSearch = () => {

  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="container">  
          <SearchForm />
          <Nav />
          <Routes>
            <Route exact path='/' element={<PhotoContainer data={this.state.photos} /> } />
            <Route exact path='/kitties' element={<PhotoContainer data={this.state.photos} /> } />
            <Route exact path='/puppies' element={<PhotoContainer data={this.state.photos} /> } />
            <Route exact path='/igauanas' element={<PhotoContainer data={this.state.photos} /> } />
            <Route element={<NotFound />} />
          </Routes>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
