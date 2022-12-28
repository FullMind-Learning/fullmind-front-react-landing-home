import React from 'react';
import {FREE, SHAPE1, SHAPE2, SHAPE3, SHAPE4} from "../../../shared/Icon/Icon";
//USE
const Newsletter = () => {
    return (
        <div className="free-trial-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-image">
                            <img src={FREE} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-content">
                            <h2>Start your free trial</h2>

                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your business email here" />
                                <button type="submit">Sign Up Free</button>
                            </form>

                            <p>Test out the Machine Learning features for 14 days, no credit card required.</p>
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

export default Newsletter;