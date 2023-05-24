import React, { useEffect, useState } from 'react'
import '../../css/Browser/SkinAge.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import GaugeChart from 'react-gauge-chart'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SkinAge() {
    const [gaugeHeight, setGaugeHeight] = useState({
        height: "auto"
    });

    useEffect(() => {
        
            setTimeout(() => {
                setGaugeHeight({
                    height: "auto"
                })
            }, 10);
    }, [])
    return (
        <>
            <div className="d-flex bor SkinAgeCards">
                <div className="d-flex col-md-3 col-4 justify-content-center align-items-center">
                <GaugeChart id="gauge-chart1" className='py-3' needleColor="#ffff00" colors={['#ffff00', '#ffff00', '#ffff00']} style={gaugeHeight} nrOfLevels={10} arcsLength={[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]} arcWidth={0.3} hideText={true}/>
                </div>
                <div className="d-flex col-md-9 col-8 bor">
                    <div className="d-flex col-md-12 col-12">
                        <div className="flex-row">
                            <div className="mt-2 flex-row">
                                <p className='myH3 mb-0'>
                                    Skin Age:
                                </p>
                                <p className='mb-1'></p>
                            </div>
                            <div className="myH3 flex-row"></div>
                            <div className="mt-2 myH4 d-flex align-items-end flex-row">
                                <p>
                                    Skin age is the condition and appearance of one's skin compared to their chronological age, influenced by sun exposure, lifestyle habits, genetics, and aging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
