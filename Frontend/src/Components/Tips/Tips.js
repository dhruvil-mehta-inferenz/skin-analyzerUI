import React from 'react'
import { GiWaterGallon } from 'react-icons/gi'
import '../../css/Browser/Tips.css'

export default function Tips(props) {
    return (
        <>
            <div className="bor container-px-2">
                <span className='bor'>
                    <b> Essential {"Wrinkle" + "'s"} <u>Tips</u> for Radient Skin</b>
                </span>
                <div className='tipsListText row scrollbar bor' id="style-14">
                    {props.data.length > 0 ? props.data.map((value) => {
                        return (
                            <>
                                <div className='col-md-1 mt-3 bor'>
                                    <div className="tipsIcon d-flex align-items-center justify-content-center">
                                        <GiWaterGallon fill='#ffffff' />
                                    </div>
                                </div>
                                <div className='col-md-11 mt-3 bor'>
                                    <div className='row '>
                                        <span className='p-0'>
                                            <b>Title</b>
                                        </span>
                                    </div>
                                    <div className='row'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati earum odio quod sunt animi similique provident? Eligendi dolores consequuntur et facere, rem repudiandae, at, ratione esse perspiciatis possimus quaerat.
                                    </div>
                                </div>
                            </>
                        )
                    }) :
                        <>
                            <span>No Data Avaibalbe!</span>
                        </>
                    }

                </div>
            </div>
        </>
    )
}
Tips.defaultProps = {
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