import React, {
    useContext,
    useEffect,
    useState
}from 'react';
import axios from 'axios';
import apiKey from '../../config.js';
import { useLocation } from 'react-router-dom';

//create context for variables and functions
const GalleryContext = React.createContext();
const GalleryUpdateContext = React.createContext();

//allow components to access up-to-date context
export function useData() {
    return useContext(GalleryContext)
}
export function useUpdateData() {
    return useContext(GalleryUpdateContext)
}

//maintains state of app
export function GalleryProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('kitties');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  //api function
   const fetchData = (queryString) => {
        setIsLoading(true);
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryString}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => { setPhotos(response.data.photos.photo)})
            .catch(error => { console.log('Error fetching and parsing data', error)})
            .finally( ()=> setIsLoading(false));
        }

    //loads initial photos
    useEffect( ()=> {fetchData(query)}, [query]);

    //ensures url params match search results
    useEffect( ()=> { 
        const searchTerm = location.pathname.replace('/search/', '').replace('/', '');
        searchTerm === '' ? setQuery(query) : setQuery(searchTerm);
    }, [location, query]);

    return (
        <GalleryContext.Provider value={{ photos, query, isLoading }}>       
            <GalleryUpdateContext.Provider value={{ setQuery }}>
                {children}
            </GalleryUpdateContext.Provider>
        </GalleryContext.Provider>
    );
}
