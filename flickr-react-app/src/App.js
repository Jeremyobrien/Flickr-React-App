import {useState, useEffect } from 'react';
import { Provider } from './components/Context';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import apiKey from './config';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


const App = () => {

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("kitties");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => { setPhotos(response.data.photos.photo)})
      .catch(error => { console.log('Error fetching and parsing data', error)})
      .finally(setIsLoading(false));
  }, [query]);
  

  const updateQuery = (query) =>{
    setQuery(query);
  }

    return (
      <Provider value={ {photos, query} }>
        <Router>
          <div className="container">  
            {
              (isLoading)
              ? <p>Loading...</p>       
              : <div>
              <SearchForm runSearch={updateQuery}  />
              <Nav handleClick={updateQuery} />
                <Routes>
                  <Route path='/' element={ <PhotoContainer data={photos} query={query} /> } >
                    <Route path=':search' element={<PhotoContainer data={photos} query={query} />} />
                    <Route path='kitties' element={ <PhotoContainer data={photos} query={query} /> } />
                    <Route path='puppies' element={ <PhotoContainer data={photos} query={query} /> } />
                    <Route path='iguanas' element={ <PhotoContainer data={photos} query={query} /> } />
                  </Route>
                  <Route path="*" element={ <NotFound />} />
              </Routes>
                </div>
            }
            </div>
        </Router>
      </Provider>
    );
  }


export default App;
