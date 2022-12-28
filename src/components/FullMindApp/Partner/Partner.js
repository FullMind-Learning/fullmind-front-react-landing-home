import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
    PARTNER1,
    PARTNER2,
    PARTNER3,
    PARTNER4, PARTNER5, PARTNER6, PARTNER7,
    PARTNER_H1,
    PARTNER_H2,
    PARTNER_H3,
    PARTNER_H4, PARTNER_H5, PARTNER_H6, PARTNER_H7
} from "../../../shared/Icon/Icon";


//USE
const Partner = () => {
    return (
        <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                    modules={[Autoplay]}
                    className="partner-slides"
                > 
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER1} alt="image" />
                                <img src={PARTNER_H1} alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER2} alt="image" />
                                <img src={PARTNER_H2} alt="image" />
                            </a> 
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER3} alt="image" />
                                <img src={PARTNER_H3} alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER4} alt="image" />
                                <img src={PARTNER_H4} alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER5} alt="image" />
                                <img src={PARTNER_H5} alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER6} alt="image" />
                                <img src={PARTNER_H6} alt="image" />
                            </a> 
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-ml-partner">
                            <a href="src/components/FullMindApp/Partner/Partner#" target="_blank">
                                <img src={PARTNER7} alt="image" />
                                <img src={PARTNER_H7} alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper> 
            </div>
        </div>
    );
}

export default Partner;