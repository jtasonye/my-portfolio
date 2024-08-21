import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import HeroImage from '../src/assets/img/hero-img.jpg';
import LinkedInImage from '../src/assets/img/linkedin.png';
import GitHubImage from '../src/assets/img/github.png';

const HeroSection = () => {
    const words = ['Computer Scientist', 'Music Enthusiast', 'Believer', 'Lifelong Learner']; // Array of words to display
    const [currentWord, setCurrentWord] = useState('Computer Scientist');
    const [animation, setAnimation] = useState('drop-in');

    useEffect(() => {
        const wordChangeInterval = setInterval(() => {
        setAnimation('drop-out');
        setTimeout(() => {
            setCurrentWord((prevWord) => {
            const nextIndex = (words.indexOf(prevWord) + 1) % words.length;
            return words[nextIndex];
            });
            setAnimation('drop-in');
        }, 500); // Duration of drop-out animation

        }, 2000); // Change words every 3 seconds

        return () => clearInterval(wordChangeInterval);
    }, [words]);

return (
    <div className="hero-section">
        <div className="text-container">
            <h1 className="text">
                <span className="yellow">Hello</span>, <span className="yellow">I'm </span>
                <span className="red">Jason Asonye</span> <br /> <br />
                <span className="yellow">A </span>
                <span id="dynamic-word" className={`red word ${animation}`}>
                {currentWord}
                </span>
            </h1>
        </div>

        <div className="hero-img">
            <img src={HeroImage} className="hero" alt="hero" />
        </div>

        <div className="social-media">
            <a href="https://www.linkedin.com/in/jason-asonye/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInImage} className="bottom-image" alt="linkedin" />
            </a>

            <a href="https://github.com/jtasonye" target="_blank" rel="noopener noreferrer">
                <img src={GitHubImage} className="bottom-image" alt="github" />
            </a>
        </div>
    </div>
    );
}

export default HeroSection;
