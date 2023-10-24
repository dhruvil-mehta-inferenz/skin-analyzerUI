import React from 'react'
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, registerables } from 'chart.js';
import "../../css/Browser/SkinConcern.css"
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, ...registerables);

export default function SkinConcern(props) {
    const data = {
        labels: ['Wrinkles', 'Acne', 'Pigmentation', 'Dark Circles', 'Open Pores', 'Dark Spot'],
        datasets: [
            {
                label: '# of Votes',
                data: [8, 8, 8, 8, 8, 8],
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0,200);
                    gradient.addColorStop(0, "rgba(250,0,0,0.66)");
                    gradient.addColorStop(1, "rgba(0,0,255,0.77)");
                    return gradient;
                },
                borderColor: "0.2px solid ",
                borderWidth: 1,


            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                // usePointStyle: false,
            },
        },
        scales: {
            r: {
                grid: {
                    display: false,
                },
                angleLines: {
                    display: true,
                    color: props.tileFontColor!=='#000000'?props.tileFontColor:'rgba(24, 26, 36, 0.25)',
                },
                pointLabels: {
                    display: true,// Hides the labels around the radar chart
                    font: {
                        size: 8,
                        weight: 700,
                        // family:'Helvetica'
                        style: 'italic'
                    },
                },
                ticks: {
                    display: false, // Hides the labels in the middel (numbers)
                },


            },
        },
        responsive: true,
        maintainAspectRatio: true
    }
    return (
        <>
            <div className="container-fluid SK_Main mt-1" style={{background:props.tileBackground,color:props.tileFontColor}}>
                <h5 className='d-flex justify-content-center p-1'>Your Skin Concern</h5>
                <div className="container-fluid bor SK_Concren_Chart ">
                    <Radar data={data} options={options} />
                </div>
            </div>
        </>
    )
}
