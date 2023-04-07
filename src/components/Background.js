import React from 'react';
import styles from '../styles/Background.module.css';

const ParallaxComponents = () => {
    return (
        <div className={styles.container}>
            <div className={[styles.shape, styles.shapeBottomLeft].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(0, 112.474, 255, 1)" offset="0%"></stop>
                            <stop id="stop2" stop-color="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s;"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeRight].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(0, 112.474, 255, 1)" offset="0%"></stop>
                            <stop id="stop2" stop-color="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s;"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeMiddle].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs> 
                            <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                                <stop id="stop1" stop-color="rgba(103.476, 255, 0, 1)" offset="0%"></stop>
                                <stop id="stop2" stop-color="rgba(217.042, 217.042, 217.042, 1)" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                    <path fill="url(#sw-gradient2)" d="M15.6,-18.7C19.6,-15.4,21.5,-9.7,20.8,-5C20,-0.3,16.4,3.6,14.1,8.8C11.8,14,10.9,20.6,6,26.7C1.2,32.8,-7.4,38.5,-12.5,36C-17.7,33.5,-19.2,22.7,-23.9,14.1C-28.6,5.4,-36.5,-1.2,-38.2,-9.4C-39.9,-17.6,-35.6,-27.4,-28.2,-30.2C-20.8,-32.9,-10.4,-28.7,-2.3,-26C5.9,-23.3,11.7,-22.1,15.6,-18.7Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s;"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeMiddleLeft].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="rgba(103.476, 255, 0, 1)" offset="0%"></stop>
                            <stop id="stop2" stop-color="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient2)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{transition: "all 0.3s ease 0s;"}}></path>
                </svg>
              </div>
        </div>
    );
};

export default ParallaxComponents;