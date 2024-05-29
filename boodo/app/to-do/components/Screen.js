"use client";

// components/Screen.js
import React, { useState, useEffect } from 'react';

const Screen = ({ dailyScore, characterImage }) => {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    useEffect(() => {
        const moveGhost = () => {
            const ghostSize = 100;
            const screen = document.querySelector('.screen');
            const screenHeight = screen.offsetHeight;
            const screenWidth = screen.offsetWidth;

            // Calculate maxTop and maxLeft to ensure the ghost stays within bounds
            const maxTop = screenHeight - ghostSize;
            const maxLeft = screenWidth - ghostSize;

            // Calculate new random top and left positions
            const newTop = Math.random() * maxTop;
            const newLeft = Math.random() * maxLeft;

            // Convert the positions to percentage values
            const newTopPercent = (newTop / screenHeight) * 100;
            const newLeftPercent = (newLeft / screenWidth) * 100;

            setPosition({
                top: `${newTopPercent}%`,
                left: `${newLeftPercent}%`,
            });
        };

        const interval = setInterval(moveGhost, 3000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="screen" style={styles.screen}>
            <div style={styles.scoreCounter}>
                Daily Score: {dailyScore}
            </div>
            <img
                src="ghost.png"
                alt="Ghost Character"
                style={{ ...styles.character, top: position.top, left: position.left }}
            />
        </div>
    );
};

const styles = {
    screen: {
        backgroundColor:'#B4CFEC',
        border: 'none',
        borderRadius: '10px',
        height: '300px',
        width: '100%', 
        position: 'relative',
        marginBottom: '20px',
        overflow: 'hidden',
        boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.5), 0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    scoreCounter: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    character: {
        position: 'absolute',
        height: '100px',
        transition: 'top 3s, left 3s',
    },
};

export default Screen;
