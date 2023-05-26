import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, PointElement, LineElement, RadialLinearScale, LinearScale, Filler } from 'chart.js';
import '../styles/RadarChart.css';

// Register the required components and controllers
Chart.register(RadarController, PointElement, LineElement, RadialLinearScale, LinearScale, Filler);

const RadarChart = ({ scores, labelSize, tickBackground }) => {
    const fontColors = [
        'rgb(116, 217, 108)',
        'rgb(230, 252, 116)',
        'rgb(108, 175, 217)',
        'rgb(100, 20, 255)',
        'rgb(255, 73, 105)',
        'rgb(130, 152, 116)',
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

    

    useEffect(() => {
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
                            backdropColor: tickBackground
                        },
                        anglelines: {
                            color: '#2c2c2c',
                        },
                        grid: {
                            color: '#3f3f3f',
                        },
                        pointLabels: {
                            font: {
                              size: labelSize,
                            },
                            color: fontColors,
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
        const chart = new Chart(chartRef.current, config);
        return () => chart.destroy();
    }, [data, labelSize, fontColors, tickBackground]);

    return (
        <div className="chart-container">
            <canvas ref={chartRef} />
        </div>
    );
};

export default RadarChart;
