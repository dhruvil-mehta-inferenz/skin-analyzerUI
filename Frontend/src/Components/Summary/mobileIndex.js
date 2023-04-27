import React from 'react'
import "../../css/Mobile/Summary.css"

export default function mobileIndex() {
    return (
        <>
            <div className="summaryMain mt-3 bor">
                <div className="p-1">
                    <h5 className='summaryHeading mt-3 mx-2'>Based on the analysis of your skin, here are the results:</h5>
                    <ol className='summary_Data'>
                        <li>Your skin type is likely normal/combination. This means your skin can be oily in some areas (such as the T-zone), and dry in others (such as the cheeks).</li>
                        <li>Your skin is well hydrated and has good elasticity, indicating good overall skin health.</li>
                        <li>You have a few areas of mild sun damage, such as fine lines and some areas of hyperpigmentation. It's recommended to use sunscreen daily to prevent further sun damage.</li>
                        <li>Your skin is prone to occasional breakouts and congestion, particularly in the T-zone area. This may be due to excess oil production and/or pore blockage.</li>
                        <li>You have a few areas of dryness and flakiness, particularly around the nose and mouth. This may be due to environmental factors such as dry air or using harsh skincare products.</li>
                    </ol>
                </div>
            </div>
        </>
    )
}
