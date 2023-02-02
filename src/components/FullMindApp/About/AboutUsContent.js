import React from 'react';
import Link from 'next/link';
import {ABOUT4, SHAPE1, SHAPE2, SHAPE3, SHAPE4} from "../../../shared/Icon/Icon";
import {URL_WHATS} from "../../../utils/utils";

//USE

const AboutUsContent = () => {
    return (
        <div className="about-area pt-0 ptb-80">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-img">
                            <img style={{width:600}} src={ABOUT4} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-content">
                            <span className="sub-title">Contacta a un experto</span>
                            <h2>Contenido e-Learning para las necesidades de tu empresa</h2>
                            <div className="bar"></div>
                            <p>Convierte a tus talentos en profesores E-learning o solicita a uno de nuestros profesionales , aprovecha tus oficinas o grabemos en un increíble estudio, sorprende a tus equipos con 3D, 2D o realidad virtual!</p>
                            <p>Diseña la experiencia de aprendizaje de tu equipo a medida con Fullmind.</p>

                            <Link href={URL_WHATS}>
                                <a className="btn btn-secondary">Contacta a un experto</a>
                            </Link>
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

export default AboutUsContent;