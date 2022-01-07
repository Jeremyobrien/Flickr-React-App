import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import { Consumer } from './Context';

const PhotoContainer = () => {
        return (
            <Consumer>
                { context => {
                        const results = context.photos;
                        let searchTerm =  context.query;
                        let images;
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
                }
            </Consumer>
        )
    }

export default PhotoContainer;