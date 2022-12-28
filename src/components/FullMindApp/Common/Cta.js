import React from 'react';
import Link from 'next/link';
import {CIRCLE, CTA_SHAPE, CTA_SHAPE2} from "../../../shared/Icon/Icon";
//USE
const Cta = () => {
    return (
        <div className="iot-cta-area bg-0f054b">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="cta-iot-img">
                            <img 
                                src={CTA_SHAPE2}
                                className="animate__animated animate__fadeInUp animate__delay-0.6s" 
                                alt="image" 
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="cta-iot-content">
                            <h3>Fullmind para creadores</h3>
                            <p>Puedes producir y diseñar increíbles experiencias para e-learning? Tienes un equipo de producción audiovisual?  te apasiona enseñar? Quieres ser parte del futuro del trabajo? Te necesitamos! </p>

                            <Link href="/src/pages/contact">
                                <a className="btn btn-primary">Quiero ser parte del equipo Fullmind</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-box">
                <img src={CIRCLE} alt="image" />
            </div>
            <div className="cta-shape">
                <img src={CTA_SHAPE} alt="image" />
            </div>
        </div>
    );
}

export default Cta;
