import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, PointElement, LineElement, RadialLinearScale, LinearScale, Filler } from 'chart.js';
import '../styles/RadarChart.css';

// Register the required components and controllers
Chart.register(RadarController, PointElement, LineElement, RadialLinearScale, LinearScale, Filler);

const RadarChart = ({ scores }) => {
    const fontColors = [
        'rgb(0, 20, 255)',
        'rgb(90, 20, 255)',
        'rgb(255, 73, 105)',
        'rgb(90, 212, 125)',
        'rgb(0, 12, 55)',
        'rgb(200, 232, 55)',
    ]
    const chartRef = useRef();
    const data = {
        labels: Object.keys(scores),
        datasets: [{
            // label: 'Analysis',
            data: Object.values(scores),
            // fill: true,
            backgroundColor: 'rgba(0, 112, 255, 0.2)',
            borderColor: 'rgb(0, 112, 255)',
            pointBackgroundColor: 'rgb(0, 112, 255)',
            pointBorderColor: '#2c2c2c',
            pointHoverBackgroundColor: '#2c2c2c',
            pointHoverBorderColor: 'rgb(0, 112, 255)'
            
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            animations: {
                // tension: {
                //     duration: 5000,
                //     easing: 'linear',
                //     from: .5,
                //     to: 0,
                //     loop: true
                // }
                animateScale: true,
                animateRotate: true
            },
            scales: {
                r: {
                    // min: 0,
                    // max: 100,
                    ticks: {
                        // stepsize: 50,
                        // textStrokeColor: 'rgb (54, 162, 235)',
                        // color: 'white',
                        backdropColor: '#2c2c2c'
                    },
                    anglelines: {
                        color: '#2c2c2c',
                    },
                    grid: {
                        color: '#3f3f3f',
                    },
                    pointLabels: {
                        font: {
                          size: 25,
                        },
                        color: 'white',
                    }
                },
            },
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    useEffect(() => {
        const chart = new Chart(chartRef.current, config);
        return () => chart.destroy();
    }, [config]);

    return (
        <div className="chart-container">
            <canvas ref={chartRef} />
        </div>
    );
};

export default RadarChart;
