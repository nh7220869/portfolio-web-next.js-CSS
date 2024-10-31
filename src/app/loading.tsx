// src/app/loading.tsx
import React from 'react';
import './Loading.css'; // Make sure this path is correct

const Loading = () => {
    return (
        <div className="loading-container" >
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default Loading;
