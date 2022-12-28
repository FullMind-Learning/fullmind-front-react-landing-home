import React from "react"
import Link from '../../../utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import {LOGO} from "../../../shared/Icon/Icon";
//USE
const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/src/pages/it-startup">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src={LOGO} alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/src/pages#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Home <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/src/pages/it-startup" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IT Startup</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/it-startup-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IT Startup Two</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/src/pages/iot" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IOT</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/hosting" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Hosting</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/machine-learning" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Machine Learning</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/machine-learning-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Machine Learning 2</a>
                                            </Link>
                                        </li> 

                                        <li className="nav-item">
                                            <Link href="/src/pages/bigdata-analytics" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Bigdata Analytics</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/digital-agency" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Digital Agency</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/digital-agency-portfolio" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Digital Agency Portfolio</a>
                                            </Link>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="/src/pages/pc-repair" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">PC Repair</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/src/pages#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            About <Icon.ChevronDown />
                                        </a>
                                    </Link> 

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/src/pages/about-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 1</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/about-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/about-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 3</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/src/pages#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Pages <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/src/pages#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Features <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/src/pages/features" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Features</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/feature-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Features Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Services <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/src/pages/services-1" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/services-2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 2</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/services-3" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 3</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/services-4" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 4</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/services-5" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 5</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/service-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/feedback" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Feedback</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Projects <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/src/pages/projects-1" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Style 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/projects-2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Style 2</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/project-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/team" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Team</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/pricing" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    User <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/src/pages/login" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Login</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/sign-up" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/src/pages/forgot-password" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Forgot Password</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li className="nav-item">
                                            <Link href="/src/pages/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/coming-soon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/404" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/src/pages#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Shop <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/src/pages/shop" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Shop</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/checkout" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/src/pages#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Blog <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-4" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-5" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-6" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/src/pages/blog-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/src/pages/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            <Link href="/src/pages/cart">
                                <a className="cart-wrapper-btn">
                                    <Icon.ShoppingCart /> 
                                    <span>{cart.length}</span>
                                </a>
                            </Link>

                            <Link href="/src/pages/contact">
							    <a className="btn btn-light">Support</a>
                            </Link>

                            <Link href="/src/pages/login">
							    <a className="btn btn-primary">Login</a>
                            </Link>
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;