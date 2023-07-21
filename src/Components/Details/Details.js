import React, { useState } from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';

const Details = () => {
    const { id } = useParams();
    const [detail] = useState(fakeData[id])
    const { language, fees, lessons, description, image } = detail;

    return (
        <div className='details'>
            <div className="detail">
                <div className="detail-1">
                    <img src={image} alt="" />
                </div>
                <div className="detail-2">
                    <h1>Language: {language}</h1>
                    <h4>Fees: {fees} <br />
                    Lessons: {lessons}</h4>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;