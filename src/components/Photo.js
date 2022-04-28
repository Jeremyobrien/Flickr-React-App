import React from 'react';

//creates individual photo list items
const Photo = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
        );
  }

export default Photo;