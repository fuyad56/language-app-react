import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h1>Meet the Web Developer</h1>
            <div className="about-content">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                <div className="about-content-item">
                    <h2>Hi! My name is <span>Fuyad.</span>
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum iusto sequi expedita quam, nobis qui doloribus blanditiis animi, a error quia voluptatem. Molestiae, explicabo. Facere omnis, illum, voluptate accusamus nihil dolore ex, possimus ipsa provident consequatur ipsum deleniti veniam. Amet aut ex perferendis aperiam eligendi earum expedita, ipsam totam?</p>
                </div>
            </div>
        </div>
    );
};

export default About;