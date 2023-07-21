import React, { useState } from 'react';
import './Services.css';
import fakeData from '../fakeData';
import Languages from '../Languages/Languages';

const Services = () => {
    const [ allData ] = useState(fakeData);
    
    return (
        <div className='services'>
            <h1>Neat language load: {allData.length}</h1>
            <div className="services-content">
                {
                    allData.map( data => <Languages key={data.id} data={data}></Languages>)
                }
            </div>
        </div>
    );
};

export default Services;
