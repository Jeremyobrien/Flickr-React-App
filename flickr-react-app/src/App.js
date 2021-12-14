import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import apiKey from './config';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


// const apiKey1 = apiKey;


class App extends Component {

    state = {
      photos: [],
      loading: true,
      query: ''
    };

  componentDidMount() {
    this.performSearch('kitties');
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fdbdeac236c88bf5c414addc80826161&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          query: query
        })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="container">  
          {
            (this.state.loading)
            ? <p>Loading...</p>       
            : <div>
              <SearchForm onSearch={this.performSearch} />
              <Nav handleClick={this.performSearch} />
              <Routes>
                <Route exact path='/' element={<PhotoContainer data={this.state.photos} query={this.state.query} /> } />
                <Route exact path='/kitties' element={<PhotoContainer data={this.state.photos} query={this.state.query} /> } />
                <Route exact path='/puppies' element={<PhotoContainer data={this.state.photos} query={this.state.query} /> } />
                <Route exact path='/iguanas' element={<PhotoContainer data={this.state.photos} query={this.state.query} /> } />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </div>
          }
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
