import { GalleryProvider } from './components/Context';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

//components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


const App = () => {
    return (
      <GalleryProvider>
          <div className="container">             
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
      </GalleryProvider>
    );
  }


export default App;
