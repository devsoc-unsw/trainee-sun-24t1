"use client"

// components/LogoutButton.js
import React from 'react';

const LogoutButton = () => {
    return (
        <button style={styles.button}>
            Logout
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: '#2a3439',
        color: 'white',
        border: 'none',
        marginBottom: '20px',
        borderRadius: '10px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        textAlign: 'center'
    }
};

export default LogoutButton;
