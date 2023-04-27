import React from 'react'
import GaugeChart from 'react-gauge-chart'

export default function mobileIndex() {
    setTimeout(() => {
        let check = document.getElementById('gauge-chart1')
        check.removeAttribute('height')
    }, 20);

    const chartStyle = {
        width: '55%',
    }
    return (
        <>
            <div className="d-flex bor SkinAgeCards">
                <div className="d-flex align-items-center col-md-3 bor p-2">
                    <GaugeChart id="gauge-chart1" needleColor="#ffff00" colors={['#ffff00', '#ffff00', '#ffff00']} nrOfLevels={3} arcsLength={[0.3, 0.4, 0.3]} arcWidth={0.3} style={chartStyle} hideText={true} />
                </div>
                <div className="col-md-9 bor">
                <div className="flex-row">
                            <div className="mt-2 flex-row">
                                <p className='myH3 mb-0'>
                                    Skin Age:
                                </p>
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
        </>
    )
}
