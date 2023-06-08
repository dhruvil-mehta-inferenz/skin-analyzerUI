import React from 'react'
import '../../css/Browser/Remedies.css'

export default function Remedies(props) {
    return (
        <>
            <div className="bor container px-2">
                <span className='bor'>
                    <b> Remedies to Reduce <u>Wrinkle</u> and Restore Radiant Skin</b>
                </span>
                <span className='scrollbar' id='style-14'>
                    <ol className='remListText mt-2'>
                        {
                            props.data.length > 0 ? props.data.map((value) => {
                                return (
                                    <>
                                        <li>{value.description}</li>
                                    </>
                                )
                            }) :
                                <>
                                    <span>No Data Avaibalbe!</span>
                                </>
                        }
                    </ol>

                </span>
            </div >
        </>
    )
}

Remedies.defaultProps = {
    featureName: 'Wrinkles',
    featureNameDesc: 'An age-related skin condition characterized by fine lines and creases on the surface, often caused by a loss of collagen and elastin in the skin.',
    data: [
        {
            "0": "",
            "0": "",
            "0": "",
            "0": "",
            "0": "",
            "0": "",
        },
        {
            "0": "",
            "0": "",
            "0": "",
            "0": "",
            "0": "",
            "0": "",
        },
    ]
}
