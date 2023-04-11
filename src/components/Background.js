import React from 'react';
import styles from '../styles/Background.module.css';

const ParallaxComponents = () => {
    return (
        <div className={styles.container}>
            <div className={[styles.shape, styles.shapeBottomLeft].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(0, 112.474, 255, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeRight].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(0, 112.474, 255, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeMiddle].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs> 
                            <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                                <stop id="stop1" stopColor="rgba(103.476, 255, 0, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(217.042, 217.042, 217.042, 1)" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                    <path fill="url(#sw-gradient2)" d="M15.6,-18.7C19.6,-15.4,21.5,-9.7,20.8,-5C20,-0.3,16.4,3.6,14.1,8.8C11.8,14,10.9,20.6,6,26.7C1.2,32.8,-7.4,38.5,-12.5,36C-17.7,33.5,-19.2,22.7,-23.9,14.1C-28.6,5.4,-36.5,-1.2,-38.2,-9.4C-39.9,-17.6,-35.6,-27.4,-28.2,-30.2C-20.8,-32.9,-10.4,-28.7,-2.3,-26C5.9,-23.3,11.7,-22.1,15.6,-18.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path>
                </svg>
            </div>
            <div className={[styles.shape, styles.shapeMiddleLeft].join(' ')}>
                <svg id="sw-js-blob-svg" viewBox="-50 50 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs> 
                        <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(103.476, 255, 0, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(230.702, 230.672, 230.621, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient2)" d="M16.3,-27.5C19.2,-20.3,18.2,-13,19.2,-7C20.1,-0.9,23,3.7,24.8,11.1C26.6,18.5,27.4,28.7,23.1,34.6C18.8,40.5,9.4,42.1,2.5,38.6C-4.4,35.2,-8.8,26.7,-14.9,21.4C-20.9,16.1,-28.7,13.9,-32.3,9C-36,4.1,-35.6,-3.7,-33.3,-10.8C-31,-18,-26.8,-24.5,-20.9,-30.7C-15,-36.9,-7.5,-42.7,-0.4,-42.1C6.7,-41.6,13.4,-34.6,16.3,-27.5Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path>
                </svg>
            </div>
            {/* <div className='bg'>
                <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <rect x="0" y="0" width="960" height="540" fill="#2c2c2c"></rect>
                    <defs>
                        <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#0083ff" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#0083ff" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#0083ff" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#3b558f" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="grad1_2" x1="43.8%" y1="0%" x2="100%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#2c2c2c" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#3b558f" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#0083ff" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#0083ff" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#3b558f" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#0083ff" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <defs>
                        <linearGradient id="grad2_2" x1="0%" y1="0%" x2="56.3%" y2="100%">
                            <stop offset="14.444444444444446%" stop-color="#3b558f" stop-opacity="1"></stop>
                            <stop offset="85.55555555555554%" stop-color="#2c2c2c" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                        <g transform="translate(960, 0)">
                            <path d="M0 270C-12.1 235.6 -24.2 201.1 -38.4 193.2C-52.6 185.3 -68.9 203.8 -88 212.5C-107.2 221.1 -129.2 219.9 -135 202C-140.8 184.2 -130.4 149.7 -135.1 135.1C-139.7 120.4 -159.3 125.6 -187.9 125.6C-216.5 125.5 -254.1 120.3 -249.4 103.3C-244.8 86.4 -197.8 57.8 -194.2 38.6C-190.6 19.5 -230.3 9.7 -270 0L0 0Z" fill="#37405b"></path><path d="M0 180C-8.1 157 -16.2 134.1 -25.6 128.8C-35.1 123.5 -45.9 135.9 -58.7 141.7C-71.4 147.4 -86.1 146.6 -90 134.7C-93.9 122.8 -87 99.8 -90 90C-93.1 80.3 -106.2 83.7 -125.3 83.7C-144.3 83.7 -169.4 80.2 -166.3 68.9C-163.2 57.6 -131.9 38.5 -129.5 25.8C-127 13 -153.5 6.5 -180 0L0 0Z" fill="#336cc5"></path><path d="M0 90C-4 78.5 -8.1 67 -12.8 64.4C-17.5 61.8 -23 67.9 -29.3 70.8C-35.7 73.7 -43.1 73.3 -45 67.3C-46.9 61.4 -43.5 49.9 -45 45C-46.6 40.1 -53.1 41.9 -62.6 41.9C-72.2 41.8 -84.7 40.1 -83.1 34.4C-81.6 28.8 -65.9 19.3 -64.7 12.9C-63.5 6.5 -76.8 3.2 -90 0L0 0Z" fill="#0083ff"></path></g><g transform="translate(0, 540)"><path d="M0 -270C16.7 -267.6 33.3 -265.2 52.7 -264.8C72 -264.4 94 -266.1 101.8 -245.8C109.6 -225.4 103.1 -183.1 112.2 -168C121.4 -152.9 146.2 -165 161.2 -161.2C176.2 -157.5 181.4 -137.8 178.8 -119.4C176.1 -101.1 165.6 -84.1 178.3 -73.9C191 -63.6 227 -60.1 246.2 -49C265.3 -37.8 267.7 -18.9 270 0L0 0Z" fill="#37405b"></path><path d="M0 -180C11.1 -178.4 22.2 -176.8 35.1 -176.5C48 -176.3 62.7 -177.4 67.9 -163.8C73 -150.3 68.7 -122 74.8 -112C80.9 -101.9 97.5 -110 107.5 -107.5C117.5 -105 121 -91.9 119.2 -79.6C117.4 -67.4 110.4 -56.1 118.9 -49.2C127.4 -42.4 151.3 -40.1 164.1 -32.6C176.9 -25.2 178.4 -12.6 180 0L0 0Z" fill="#336cc5"></path><path d="M0 -90C5.6 -89.2 11.1 -88.4 17.6 -88.3C24 -88.1 31.3 -88.7 33.9 -81.9C36.5 -75.1 34.4 -61 37.4 -56C40.5 -51 48.7 -55 53.7 -53.7C58.7 -52.5 60.5 -45.9 59.6 -39.8C58.7 -33.7 55.2 -28 59.4 -24.6C63.7 -21.2 75.7 -20 82.1 -16.3C88.4 -12.6 89.2 -6.3 90 0L0 0Z" fill="#0083ff">

                            </path>
                        </g>
                </svg>
            </div> */}
        </div>
    );
};

export default ParallaxComponents;