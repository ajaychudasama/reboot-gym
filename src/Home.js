import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <main className="home">
      <div className="text-container">
        <h1 className="heading">TRANSFORM YOUR BODY</h1>
        <p className="paragraph">Start your fitness journey today</p>
      </div>
      <img src="Body.jpg" alt="Fitness" className="fitness-image" />
    </main>
  );
};

export default Home;
