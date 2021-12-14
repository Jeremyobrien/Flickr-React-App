import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    render() {
        const results = this.props.data;
        let searchTerm =  this.props.query;
        let images;
        if (results.length > 0) {
            images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
       } else {
          images = <NotFound />
       }
        return (
            <div className="photo-container">
                <h2>Showing results for "{searchTerm}"</h2>
                <ul>
                    {images}
                </ul>
            </div>
        );
    }

    };

export default PhotoContainer;