import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

//USE
const OurFeatures = () => {
    return (
        <div className="features-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Los beneficios</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Settings />
                            </div>
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Accesibilidad</a>
                                </Link>
                            </h3>
                            <p>a una red de buenas prácticas para mantener a tu organización a la vanguardia de las tendencias en capacitación.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon">
                                <Icon.Mail />
                            </div> 
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Personalización</a>
                                </Link>
                            </h3>
                            <p>Para las necesidades específicas de tu empresa <br/><br/></p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-c679e3">
                                <Icon.Grid />
                            </div>
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Eficiencia</a>
                                </Link>
                            </h3>
                            <p>Un LMS permite a las empress gestionar y realizar seguimiento del
                                progreso del aprendizaje de los estudiantes de manera eficiente, lo que permite
                                ahorrar tiempo y recursos.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.Bell />
                            </div>
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Flexibilidad</a>
                                </Link>
                            </h3>
                            <p>Un LMS permite a los estudiantes trabajar a su propio ritmo y adaptarse al
                                aprendizaje en línea de acuerdo con sus necesidades y disponibilidad.<br/>
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-c679e3">
                                <Icon.Info />
                            </div>
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Ahorro de costos</a>
                                </Link>
                            </h3>
                            <p>La formación en línea a través de un MS puede ser más asequible
                                que la formación presencial, ya que no se requieren costos de desplazamiento o
                                alojamiento.<br/><br/> </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                            <div className="icon bg-eb6b3d">
                                <Icon.Box />
                            </div>
                            <h3>
                                <Link href="/src/pages/feature-details">
                                    <a>Mejora del rendimiento</a>
                                </Link>
                            </h3>
                            <p>Una plataforma que ofrezca creadores de contenido e-learning
                                específicos para cada empresa puede proporcionar contenido de aprendizaje de alta
                                calidad y relevante para la empresa, lo que puede mejorar el rendimiento y la retención
                                de los estudiantes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  