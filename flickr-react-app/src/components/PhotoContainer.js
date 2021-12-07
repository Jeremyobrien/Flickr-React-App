import React, { Component } from 'react';
import Photo from './Photo';
import  NotFound  from './NotFound';


class PhotoContainer extends Component {
    state = {
        photos: false
    }
    handlePhotoCreation = () => {
        this.props.photos.map( photo => <Photo />)
    }

    render() {
        return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
        if (this.state.photos) {
            this.handlePhotoCreation
        } else {
            <NotFound />
        }
        </ul>
        </div>
        );
    };
}

export default PhotoContainer;