import React, { useData, useUpdateData } from './Context'
import Photo from './Photo';
import NotFound from './NotFound';
// import { Consumer } from './Context';
import { useParams } from 'react-router-dom';

const PhotoContainer = () => { 
    const queryData = useData();
    const updateQuery = useUpdateData();
    let urlParam = useParams('search'); 


    const results = queryData.photos;
    let searchTerm =  queryData.query;
    let images;
    //  if (urlParam !== searchTerm){
    //     updateQuery.updateQuery(urlParam)
    // }
    if (results.length > 0) {
        images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
        } else {
            images = <NotFound />
        }  
    
    return(
    <div className="photo-container">
        <h2>Results for "{searchTerm}"</h2>
        <ul>
            {images}
        </ul>
    </div>
    )

    }

export default PhotoContainer;