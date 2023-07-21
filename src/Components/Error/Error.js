import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <h2>There's  <span>nothing</span> here...</h2>
            <p>Maybe the page you're looking for is not found or never existed</p>
            <a href="/">Bake to home <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    );
};

export default Error;