import React, {
    useContext,
    useEffect,
    useMemo,
    useState
}from 'react';

import axios from 'axios';
import apiKey from '../../config';
const GalleryContext = React.createContext();
const GalleryUpdateContext = React.createContext();


export function useData() {
    return useContext(GalleryContext)
}

export function useUpdateData() {
    return useContext(GalleryUpdateContext)
}

// export const Consumer = galleryContext.Consumer;

export function GalleryProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("kitties");
  const [isLoading, setIsLoading] = useState(true);
  let [searchParams, setSearchParams] = useState('');
  const [totalQueries, setTotalQueries]  = useState(['kitties',])

  const updateQuery = (query) =>{
    setQuery(query);
    }

    const fetchData = () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => { setPhotos(response.data.photos.photo)})
            .catch(error => { console.log('Error fetching and parsing data', error)})
            .finally(setIsLoading(false));
        }
    useEffect( fetchData, [query, searchParams]);

    return (
        <GalleryContext.Provider value={{photos, query, isLoading}}>
            <GalleryUpdateContext.Provider value={ {updateQuery, fetchData}}>
                {children}
            </GalleryUpdateContext.Provider>
        </GalleryContext.Provider>
    )
}





// const LocationContext = React.createContext();

// function getLocation() {
//     const { pathname, hash, search } = window.location;
  
//     // We recreate our own object 
//     // because window.location is mutated
//     return {
//       pathname,
//       hash,
//       search,
//     };
//   }

// export function Router({ children }) {
//   const [location, setLocation] = useState(getLocation());

//   useEffect(() => {
//     const refreshLocation = () => {
//       setLocation(getLocation());
//     };

//     // Refresh the location, for example when we go back
//     // to the previous page
//     // Even from the browser's button
//     window.addEventListener("popstate", refreshLocation);

//     return () =>
//       window.removeEventListener(
//         "popstate",
//         refreshLocation
//       );
//   }, []);

//   const navigator = useMemo(
//     () => ({
//       push(to) {
//         window.history.pushState(null, null, to);
//         setLocation(getLocation());
//       },
//       replace(to) {
//         window.history.replaceState(null, null, to);
//         setLocation(getLocation());
//       },
//       back() {
//         window.history.go(-1);
//       },
//       forward() {
//         window.history.go(1);
//       },
//       go(step) {
//         window.history.go(step);
//       },
//     }),
//     []
//   );

//   return (
//     <LocationContext.Provider
//       value={{
//         location,
//         navigator
//       }}
//     >
//       {children}
//     </LocationContext.Provider>
//   );
// }
