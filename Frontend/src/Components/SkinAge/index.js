import React from 'react'
import '../../css/SkinAge.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import GaugeChart from 'react-gauge-chart'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SkinAge() {
    setTimeout(() => {
        let check = document.getElementById('gauge-chart1')
        check.style.height = '0px';
    }, 20);

    const chartStyle = {
        height: 200,
        width: 200,
    }
    return (
        <>
            <div className="row bor SkinAgeCards">
                <div className="d-flex col-md-3 justify-content-center">
                    <GaugeChart id="gauge-chart1" needleColor="#ffff00" colors={['#ffff00', '#ffff00', '#ffff00']} nrOfLevels={3} arcsLength={[0.3, 0.4, 0.3]} arcWidth={0.3} style={chartStyle} hideText={true} />
                </div>
                <div className="d-flex col-md-9 bor">
                    <div className="d-flex col-md-12 row">
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
