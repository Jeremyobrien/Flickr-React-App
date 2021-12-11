import React from 'react';
import Photo from './Photo';



const PhotoContainer = (props) => {
 
    // state = {
    //     photos: this.props.gifs
    // }
    // handlePhotoCreation = () => {
    //     this.props.photos.map( photo => <Photo />)
    // }
    const results = props.data;
    let images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);

        return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {images}
        </ul>
        </div>
        );
    };

export default PhotoContainer;