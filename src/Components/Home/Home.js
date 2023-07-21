import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-column">
                <div className="home-column-1">
                    <h1>Hi, I'm <span>Fuyad</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur aperiam nihil repudiandae. Asperiores laboriosam culpa ratione omnis unde vero molestiae atque reiciendis quisquam sunt quae earum officiis, magnam dolorum cumque dolorem veritatis quibusdam ex in? Sit a quisquam inventore dolores aut, modi velit rem rerum commodi, asperiores dignissimos! Ullam, culpa!</p>
                    <div className="home-column-media">
                        <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="/"><i class="fa-brands fa-twitter"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="/"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="home-column-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
