import React from 'react';
import Link from 'next/link';
import {
    EiGHT,
    ELEVEN,
    FIVE,
    FOUR,
    MAIN,
    NINE,
    ONE,
    SEVEN,
    SHAPE1,
    SHAPE2, SHAPE3, SHAPE4,
    SIX,
    TEN,
    THREE,
    TWO
} from "../../../shared/Icon/Icon";





//USE
const MainBanner = () => {
    return (
        <div className="ml-main-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-content">
                            <h1> Capacita a tu equipo, educa a tu audiencia y genera impacto en tu organización.</h1>
                            <p>Ofrecemos soluciones a organizaciones que requieren acceso a herramientas y profesionales
                                expertos en producción e-Learning a menores costos y mayor efectividad, facilitando
                                solicitudes de requerimiento, almacenamiento y toda la suite de soluciones necesarias
                                para educar y mejorar los equipos de trabajo.</p>

                            <Link href="/src/pages/contact">
                                <a className="btn btn-secondary">Get Started</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-banner-image">
                            <img
                                src={ONE}
                                className="animate__animated animate__fadeIn animate__delay-2s"
                                alt="image"
                            />

                            <img
                                src={TWO}
                                className="animate__animated animate__fadeInUp animate__delay-1s"
                                alt="image"
                            />

                            <img
                                src={THREE}
                                className="animate__animated animate__fadeInUp animate__delay-0.5s"
                                alt="image"
                            />

                            <img
                                src={FOUR}
                                className="animate__animated animate__fadeInUp animate__delay-2s"
                                alt="image"
                            />

                            <img
                                src={FIVE}
                                className="animate__animated animate__fadeInDown animate__delay-2.5s"
                                alt="image"
                            />

                            <img
                                src={SIX}
                                className="animate__animated animate__fadeInDown animate__delay-1.9s"
                                alt="image"
                            />

                            <img
                                src={SEVEN}
                                className="animate__animated animate__fadeInDown animate__delay-2.1s"
                                alt="image"
                            />

                            <img
                                src={EiGHT}
                                className="animate__animated animate__fadeInDown animate__delay-1.9s"
                                alt="image"
                            />

                            <img
                                src={NINE}
                                className="animate__animated animate__fadeInDown animate__delay-1.7s"
                                alt="image"
                            />

                            <img
                                src={TEN}
                                className="animate__animated animate__fadeInDown animate__delay-1.5s"
                                alt="image"
                            />

                            <img
                                src={ELEVEN}
                                className="animate__animated animate__fadeInUp animate__delay-0.4s"
                                alt="image"
                            />

                            <img
                                src={MAIN}
                                className="animate__animated animate__fadeInUp animate__delay-0.5s"
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