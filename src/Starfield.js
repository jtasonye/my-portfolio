import React, { useEffect, useRef } from 'react';
import './Starfield.css'; // Import the CSS file for styles

const Starfield = () => {
    const starfieldRef = useRef(null);

    useEffect(() => {
        const starfield = starfieldRef.current;
        const numStars = 200; // Number of stars

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random position
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            starfield.appendChild(star);
        }
    }, []);

    return <div className="starfield" ref={starfieldRef}></div>;
};

export default Starfield;
