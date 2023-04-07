import React from 'react';
import '../styles/LoadingView.css';

function LoadingView() {
    return (
        <div className="loading-view-container">
            <div className="loading-view">
                <div class="loader">
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                    <div class="l"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingView;