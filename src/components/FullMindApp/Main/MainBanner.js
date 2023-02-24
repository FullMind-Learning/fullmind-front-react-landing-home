import React from 'react';
import Link from 'next/link';
import {
    R24, R25, R26, R27,
    SHAPE1,
    SHAPE2, SHAPE3, SHAPE4,
} from "../../../shared/Icon/Icon";

import {
    URL_WHATS
} from "../../../utils/utils";





//USE
const MainBanner = () => {
    return (
        <div className="ml-main-section">
            <div className="container">
                <div>
                    <h1 style={{
                        color:"#44CE6F",
                        fontSize:"20px"
                    }}> E-learning corporativo on demand.</h1>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-content">
                            <h1> Capacita a tu equipo, educa a tu audiencia y genera impacto en tu organización.</h1>
                            <p style={{fontSize:20}} className="col-md-12">Fullmind es una plataforma que facilita acceso a herramientas y profesionales expertos en producción e-Learning.</p>

                            <Link href={URL_WHATS}>
                                <a className="btn btn-secondary">Mi empresa necesita E-learning</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-image">


                            <img
                                src={R24}
                                style={{
                                    marginLeft:"-96px",
                                    width:"38%",
                                }}
                                className="animate__animated animate__fadeIn animate__delay-1.4s"
                                alt="image"
                            />
                            <img
                                src={R25}
                                style={{
                                    marginLeft:"121px",
                                    marginTop:"-30px",
                                    width:"38%",

                                }}
                                className="animate__animated animate__fadeInUp animate__delay-1.4s"
                                alt="image"
                            />
                            <img
                                src={R26}
                                style={{
                                    marginLeft:"-66px",
                                    marginTop:"-34px",
                                    width:"38%",

                                }}
                                className="animate__animated animate__fadeInUp animate__delay-1.4s"
                                alt="image"
                            />
                            <img
                                src={R27}
                                style={{
                                    marginRight:"-52px",
                                    marginTop:"145px",
                                    width:"49%"
                                }}
                                className="animate__animated animate__fadeInDown animate__delay-2.5s"
                                alt="image"
                            />




                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={SHAPE1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={SHAPE2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={SHAPE3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={SHAPE4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={SHAPE4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={SHAPE4} alt="shape" />
            </div>
        </div>
    );
}

export default MainBanner;