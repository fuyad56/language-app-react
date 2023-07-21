import React from 'react';
import './Countries.css';
import { useNavigate } from 'react-router-dom';

const Countries = (props) => {
    const { name, flags } = props.country;
    const navigate = useNavigate()
    const handleClick = name => {
        navigate(`/details/${name.common}`);
    };
    
    return (
        <div className='countries'>
            <img src={flags.png} alt="" />
            <button onClick={() => handleClick(name)}>{name.common}</button>
        </div>
    );
};

export default Countries;