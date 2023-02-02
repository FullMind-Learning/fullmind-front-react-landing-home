import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import {ICON4, ICON5, ICON6, ICON7, SHAPE1, SHAPE2, SHAPE3, SHAPE4} from "../../../shared/Icon/Icon";
import {URL_WHATS} from "../../../utils/utils";

//USE
const WhatWeOffer = () => {
    return (
        <div className="solutions-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">FullMind</span>
                    <h2>Nuestra solución</h2>
                    <div className="bar"></div>
                    <p>Plataforma e-learning customizada para tu empresa, sube videos, crea evaluaciones, recibe reportes.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={ICON4} alt="image" />
                            </div>
                            <h3>
                                <Link href="/src/pages/service-details">
                                    <a>Plataforma</a>
                                </Link>
                            </h3>
                            <p>Plataforma e-learning customizada para tu empresa, sube videos, crea evaluaciones, recibe reportes.</p>

                            <Link href={URL_WHATS}>
                                <a className="learn-more-btn" >
                                    <Icon.PlusCircle/> Aprende más
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={ICON5} alt="image" />
                            </div>
                            <h3>
                                <Link href="/src/pages/service-details" >
                                    <a>Profesionales</a>
                                </Link>
                            </h3>
                            <p>Acceso a los mejores PRODUCTORES Y CREADORES De Contenido E-learning local.</p>

                            <Link href={URL_WHATS}>
                                <a className="learn-more-btn" >
                                    <Icon.PlusCircle/> Aprende más
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={ICON6} alt="image" />
                            </div>
                            <h3>
                                <Link href="/src/pages/service-details">
                                    <a>On-demand,</a>
                                </Link>
                            </h3>
                            <p>Creación de contenido para las necesidades específicas de tu empresa</p>
                            <br/>

                            <Link href={URL_WHATS}>
                                <a className="learn-more-btn" >
                                    <Icon.PlusCircle/> Aprende más
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src={ICON7} alt="image" />
                            </div>
                            <h3>
                                <Link href="/src/pages/service-details">
                                    <a>Monetización</a>
                                </Link>
                            </h3>
                            <p>Vende tus cursos E-learning, Genera monetizacíon de tu contenido AudioVisual</p>
                            <Link href={URL_WHATS}>
                                <a className="learn-more-btn" >
                                    <Icon.PlusCircle/> Aprende más
                                </a>
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

export default WhatWeOffer;