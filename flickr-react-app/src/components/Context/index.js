import React, {
    useContext,
    useEffect,
    useState
}from 'react';
import axios from 'axios';
import apiKey from '../../config.js';
import { useLocation } from 'react-router-dom';
const GalleryContext = React.createContext();
const GalleryUpdateContext = React.createContext();


export function useData() {
    return useContext(GalleryContext)
}

export function useUpdateData() {
    return useContext(GalleryUpdateContext)
}


export function GalleryProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("kitties");
  const [isLoading, setIsLoading] = useState(true);

    
    const location = useLocation();

    const fetchData = (queryString) => {
        setIsLoading(true);
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryString}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => { setPhotos(response.data.photos.photo)})
            .catch(error => { console.log('Error fetching and parsing data', error)})
            .finally( ()=> setIsLoading(false));
        }

    useEffect( ()=>{fetchData(query)}, [query]);


    useEffect(()=>{
        const searchTerm = location.pathname.replace('/search/', '').replace('/', '');
        setQuery(searchTerm);
    }, [location]);

    return (
        <GalleryContext.Provider value={{ photos, query, isLoading }}>
            <GalleryUpdateContext.Provider value={{ setQuery }}>
                {children}
            </GalleryUpdateContext.Provider>
        </GalleryContext.Provider>
    )
}
