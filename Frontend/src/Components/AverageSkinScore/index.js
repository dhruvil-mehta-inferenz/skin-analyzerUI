import React from 'react'
import '../../css/AverageSkinScore.css';

export default function AverageSkinScore() {
    return (
        <>
            <div className="row bor ASC_Cards">
               
                <div className="d-flex col-md-9 bor">
                    <div className="d-flex col-md-12 row">
                        <div className="flex-row">
                            <div className="mt-2 flex-row">
                                <p className='myH3 mb-0'>
                                    What Should be your Skin Scores:
                                </p>
                                <p className='mb-1'></p>
                            </div>
                            <div className="myH3 flex-row"></div>
                            <div className="mt-2 myH4 flex-row">
                                <div className="d-flex flex-row">Dark Spot 04</div>
                                <div className="d-flex flex-row">Open Pores 02</div>
                                <div className="d-flex flex-row">Dark Circles 01</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    {/* <Doughnut type='doughnut' data={data} /> */}
                    {/* HEY */}
                </div>
            </div>
        </>
    )
}
