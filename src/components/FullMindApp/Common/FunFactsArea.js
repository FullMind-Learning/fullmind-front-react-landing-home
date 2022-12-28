import React from 'react';
import Link from 'next/link';
import {MAP} from "../../../shared/Icon/Icon";
//USE
const FunFactsArea = () => {
    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>We always try to understand users expectation</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>180K</h3>
                            <p>Downloaded</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>20K</h3>
                            <p>Feedback</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>500+</h3>
                            <p>Workers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="funfact">
                            <h3>70+</h3>
                            <p>Contributors</p>
                        </div>
                    </div>
                </div>


                <div className="map-bg">
                    <img src={MAP} alt="map" />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;