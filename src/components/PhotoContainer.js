import React, { useData } from './Context';
import '../assets/css/style.css';
import Photo from './Photo';
import NotFound from './NotFound';


//receives data and renders a list of search results
const PhotoContainer = () => { 
    const { isLoading, query, photos } = useData();

    const results = photos;
    let searchTerm = query;

    let images;

        
    if (results.length > 0) {
        images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
        } else {
            images = <NotFound />
        }  
    
   
    return(
    <div className="photo-container">
        {
            isLoading ? 
                <h1>Loading...</h1>
                :
                <div>
                    <h2>Results for "{searchTerm}"</h2>
                    <ul>
                        {images}
                    </ul>
                </div>
        }
    </div>
    )

    }

export default PhotoContainer;