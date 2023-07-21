import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="foot">
                <div className="foot-item">
                    <a href="/" className="logo">LEARNENG</a>
                    <h4>10000+ Satisfied Students</h4>
                    <p>The staff here is really supportive, teachers are great, the school has a good structure. Thank you!</p>
                </div>
                <div className="foot-course">
                    <h4>Popular Courses</h4>
                    <div className="courses">
                        <div className="courses-1">
                            <p>English</p>
                            <p>Spanish</p>
                            <p>French</p>
                            <p>German</p>
                        </div>
                        <div className="courses-2">
                            <p>$ 50</p>
                            <p>$ 60</p>
                            <p>$ 55</p>
                            <p>$ 70</p>
                        </div>
                    </div>
                </div>
                <div className="foot-git">
                    <h4>GET IN TOUCH</h4>
                    <input type="text" placeholder='enter your email address' name="" id="" />
                    <button>Submit</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;