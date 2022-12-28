import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import {LOGO, MAP, SHAPE1, SHAPE2} from "../../../shared/Icon/Icon";
//USE
const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/src/pages/it-startup">
                                    <a>
                                        <img src={LOGO} alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/src/pages/about-1">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/services-1">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/features">
                                        <a>Features</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/blog-1">
                                        <a>Latest News</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/src/pages/faq">
                                        <a>FAQ's</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/team">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/src/pages/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    27 Division St, New York, <br /> NY 10002, USA
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:startp@gmail.com">startp@gmail.com</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href="src/components/FullMindApp/Footer/Footer" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                <li>
                                    <a href="src/components/FullMindApp/Footer/Footer" className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="src/components/FullMindApp/Footer/Footer" className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="src/components/FullMindApp/Footer/Footer" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} StartP. All rights reserved by <a href="src/components/FullMindApp/Footer/Footer" target="_blank">EnvyTheme</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={MAP} className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src={SHAPE1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={SHAPE2} alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 