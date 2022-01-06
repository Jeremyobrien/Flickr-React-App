import React from 'react';
import { useParams } from 'react-router-dom';


const UpdateUrl = (props) => {
const search = useParams();

return (
    <div> Hi {search}</div>
);
  }

  export default UpdateUrl;