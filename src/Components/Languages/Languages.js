import React from 'react';
import './Languages.css';
import { useNavigate } from 'react-router-dom';

const Languages = (props) => {
    const { id, image } = props.data;
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/services/${id}`)
    }
    
    return (
        <div className='languages'>
            <img src={image} alt="" />
            <button onClick={() => handleClick(id)}>Read More</button>
        </div>
    );
};

export default Languages;