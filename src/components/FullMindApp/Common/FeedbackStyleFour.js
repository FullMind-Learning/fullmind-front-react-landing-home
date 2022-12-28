import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import {CLIENT1, CLIENT2, CLIENT3, SHAPE1, SHAPE2, SHAPE3, SHAPE4} from "../../../shared/Icon/Icon";
//USE
const FeedbackStyleFour = () => {
    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="ml-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={CLIENT1} alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={CLIENT2} alt="image" />
                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src={CLIENT3} alt="image" />
                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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

export default FeedbackStyleFour;