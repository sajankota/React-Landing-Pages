import React, { Component } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import * as Icon from "react-feather";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import {
    Container,
    Row,
    Nav,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";

import LaptopImage from "../assets/images/laptop.png";

import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

class IndexThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            arrow: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        window.addEventListener("scroll", this.windowScroll);
    }

    handleScroll() {
        if (
            document.body.scrollTop >= 500 ||
            document.documentElement.scrollTop >= 500
        ) {
            this.setState({
                arrow: true,
            });
        } else {
            this.setState({
                arrow: false,
            });
        }
    }

    /**
     * Window scroll
     */
    windowScroll() {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
    toggleMenu() {
        this.setState({
            toggleMenu: !this.state.toggleMenu,
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <nav
                        id="navbar"
                        className="navbar navbar-expand-lg nav-light fixed-top sticky"
                    >
                        <div className="container">
                            <NavbarBrand href="/#">
                                <span className="logo-light-mode">
                                    <img src={LogoLight} className="l-light" alt="" />
                                    <img src={LogoDark} className="l-dark" alt="" />
                                </span>
                                <img src={LogoLight} className="logo-dark-mode" alt="" />
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleMenu}>
                                <Icon.Menu />
                            </NavbarToggler>

                            <Collapse
                                className="collapse navbar-collapse"
                                isOpen={this.state.toggleMenu}
                                id="navbarSupportedContent"
                            >
                                <Nav
                                    className="navbar-nav ms-auto mb-2 mb-lg-0"
                                    id="navbar-navlist"
                                >
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="home">
                                            Home
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="service">
                                            Services
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="about">
                                            About Us
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="price">
                                            Pricing
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="blog">
                                            Blogs
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClass="active" spy={true} smooth={true} duration={500} className="nav-link" to="contact">
                                            Contact Us
                                        </Link>
                                    </NavItem>
                                </Nav>

                                <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                                    <li className="list-inline-item">
                                        <Link2
                                            to="/auth-login"
                                            target="_blank"
                                            className="btn btn-icon btn-pills btn-primary border-0"
                                        >
                                            <Icon.User className="icons" />
                                        </Link2>
                                    </li>
                                </ul>
                            </Collapse>
                        </div>
                    </nav>

                    {/* <!-- Start Hero --> */}
                    <section className="bg-home d-flex align-items-center bg-gradient-primary" style={{ height: 'auto' }} id="home">
                        <Container>
                            <Row>
                                <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                    <div className="title-heading margin-top-100">
                                        <h1 className="heading text-white mb-3">Start Creating Beautiful Landing <br /> Pages Today!</h1>
                                        <p className="para-desc mx-auto text-white-50">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        <div className="mt-4 pt-2">
                                            <a href="#about" className="btn btn-primary btn-pills border-0">Start Free Trial <i className="uil uil-angle-right-b"></i></a>
                                        </div>
                                    </div>

                                    <div className="home-dashboard">
                                        <img src={LaptopImage} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>
                    <div className="position-relative">
                        <div className="shape overflow-hidden text-white">
                            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>

                    <Services />
                    <About />
                    <Pricing />
                    <Blog />
                    <Contact />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default IndexThree;
