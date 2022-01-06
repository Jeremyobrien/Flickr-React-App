import React from 'react';
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import PhotoContainer from './PhotoContainer';

const Search = () => {
    const navigate = useNavigate()

    const {search} = useParams()
    return (
        <div>
        onClick={()=> navigate("/search", { state: 444 })}<PhotoContainer />
         Search is {search} 
        </div>
    );
}

export default Search;