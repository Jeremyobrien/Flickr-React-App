import {useState, useEffect, useCallback,useMemo } from 'react';
import { GalleryProvider, useData, useUpdateData } from './components/Context';
import './App.css';
import axios from 'axios';
import {
  Routes,
  Route,
  useParams,
  useNavigate
} from 'react-router-dom';
import apiKey from './config';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


const App = () => {
  
  // let search = useParams();
  // searchParams = setSearchParams(search);
  
  // if (searchParams !== query) {
  //   setQuery(searchParams);
  // }




// const getQuery = useMemo( () => ({ updateQuery }), [updateQuery]);


  




  // const params = searchParams.get('search')
  // setSearchParams(params);
  // if (searchParams !== query) {
  // return updateQuery(searchParams);
  // }

const isLoading = useData();

    return (
      <GalleryProvider>
          <div className="container">  
            {
              (isLoading)
              ? <p>Loading...</p>       
              : <div>
              <SearchForm />
              <Nav />
                <Routes>
                  <Route path='/' element={ <PhotoContainer /> } >
                    <Route path='search/:query' element={<PhotoContainer />} />
                    <Route path='kitties' element={ <PhotoContainer /> } />
                    <Route path='puppies' element={ <PhotoContainer /> } />
                    <Route path='iguanas' element={ <PhotoContainer /> } />
                  </Route>
                  <Route path="*" element={ <NotFound />} />
              </Routes>
                </div>
            }
            </div>
      </GalleryProvider>
    );
  }


export default App;
