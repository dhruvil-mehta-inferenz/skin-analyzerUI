import React from 'react'
import '../../css/Browser/AverageSkinScore.css';

export default function AverageSkinScore() {
    return (
        <>
            <div className="bor ASC_Cards">
                <div className="p-2">
                    <div className="d-flex col-md-9 col-12 bor">
                        <div className="col-md-12 col-12 ">
                            <div className="row">
                                <div className="mt-2 row">
                                    <p className='myH3 mb-0'>
                                        What Should be your Skin Scores:
                                    </p>
                                    <p className='mb-1'></p>
                                </div>
                                <div className="myH3 flex-row"></div>
                                <div className="mt-2 myH4">
                                    <div className="row">
                                        <div className="col-md-5 col-5">
                                            <div className="">Dark Spot <b> 04</b></div>
                                            <div className="">Open Pores <b> 02</b></div>
                                            <div className="">Dark Circles <b> 01</b></div>
                                        </div>
                                        <div className="col-md-5 col-5">
                                            <div className="">Pigmentation <b> 01</b></div>
                                            <div className="">Acne <b> 02</b></div>
                                            <div className="">Wrinkles <b> 10</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
