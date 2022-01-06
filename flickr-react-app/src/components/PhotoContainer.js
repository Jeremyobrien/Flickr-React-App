import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

        const results = props.data;
        let searchTerm =  props.query;
        let images;
        if (results.length > 0) {
            images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
       } else {
          images = <NotFound />
       }
        return (
            <div className="photo-container">
                <h2>Showing results for {searchTerm}</h2>
                <ul>
                    {images}
                </ul>
            </div>
        );
    }

export default PhotoContainer;