import React from 'react';

const Photo = (props) => {
    const url = `https://farm5.staticflickr.com/4334/${props.apiKey}.jpg`
    return (
        <li>
            <img src= {url} alt="" />
        </li>
    )
};

export default Photo;