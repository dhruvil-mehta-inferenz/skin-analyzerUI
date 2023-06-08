import React, { useContext } from 'react'
import { isMobile } from 'react-device-detect';
import { RiArrowGoBackFill } from 'react-icons/ri';
import '../../css/Browser/Solutions.css'
import mainContext from '../../Utils/States/indexContext';
import Remedies from '../Remedies/Remedies';
import Tips from '../Tips/Tips';

export default function Solutions() {
    const getAllContext = useContext(mainContext);
    function handleBackClick() {
        getAllContext.setShowState(false)
    }
    function handleNavTabToggle(_Toggler) {
        getAllContext.setCompState(_Toggler);
        if (_Toggler === "Remedies") {
            getAllContext.setTipsActiveState('activeClass');
            getAllContext.setRemActiveState('');
        }
        else if (_Toggler == "Tips") {
            getAllContext.setRemActiveState('activeClass')
            getAllContext.setTipsActiveState('');
        }

    }
    return (
        <>
            <div className="bor container mt-4 tipRemBody">
                <div className="row mt-4">
                    <div className={`bor col-md-6 col-10 d-flex justify-content-${isMobile ? 'center' : 'start'} align-items-center  mt-2`}>
                        <nav className="nav nav-pills p-1 bor">
                            <a className={`d-flex justify-content-center nav-link ${getAllContext.getTipsActiveState}`} onClick={() => handleNavTabToggle("Remedies")}>Remedies</a>
                            <a className={`d-flex justify-content-center nav-link ${getAllContext.getRemActiveState}`} onClick={() => handleNavTabToggle("Tips")}>Tips</a>
                        </nav>
                    </div>
                    <div className="bor col-md-6 col-2 d-flex justify-content-end align-items-center  mt-2">
                        <div className="d-flex justify-content-center align-items-center remBack " data-bs-dismiss="modal">
                            <RiArrowGoBackFill fill='#ffffff' onClick={handleBackClick} />
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center mt-2 bor">
                    <div className="col-md-2 col-4 d-flex justify-content-center">
                        <div className={`cpTips`}
                        // style={{ background: `conic-gradient(${props.data[1][2]} ${props.data[1][0] * 3.6}deg, #ededed 0deg)` }}
                        >
                            <div className={`cp2Tips `}
                            // style={{ background: `conic-gradient(#00000000 0deg, ${props.data[1][2]} 0deg)` }}
                            >
                                <div className={`cp3Tips`}
                                // style={{ background: `conic-gradient(#00000000 0deg, ${props.tileBackground} 0deg` }}
                                >
                                    <span className="pvTips" >
                                        {/* {props.data[1][1]} */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-8">
                        <div className="row bor">
                            <span className="p-0">
                                <b> Wrinkles</b>
                            </span>
                        </div>
                        <div className="row bor">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, necessitatibus. Optio ipsa, ratione voluptatum perferendis libero ad, obcaecati repudiandae vero vel dolores odit illo quisquam error numquam repellendus veniam veritatis.
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                {getAllContext.getCompState === "Tips" ? <Tips /> : getAllContext.getCompState === "Remedies" ? <Remedies /> : 'Data Not Found'}
                </div>
                <div className="row p-3">
                    <div className="bor tipRemNote">
                        <span>
                        Note: Please note that severe wrinkles may require professional advice and personalized treatment plans. It's essential to consult with a dermatologist or skincare professional to determine the most suitable approach for your specific condition.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
