import React from 'react';
import '../styles/LoadingView.css';

function LoadingView() {
    return (
        <div className="loading-view-container">
            <div className="loading-view">
                <div className="loader">
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                    <div className="l"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingView;