import React, { Component } from "react";
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

import LogoDark from "../assets/images/logo-dark.png";
import AboutImage from "../assets/images/about.png";

import * as Icon from "react-feather";
import ModalVideo from "react-modal-video";
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

import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

class IndexSix extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            arrow: false,
            videoModal: false,
        };
        this.openModal = this.openModal.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

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
     * Video modal open
     */
    openModal() {
        this.setState({ videoModal: true });
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
                        className="navbar navbar-expand-lg fixed-top sticky"
                    >
                        <div className="container">
                            <NavbarBrand href="">
                                <img src={LogoDark} alt="" />
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
                                    className="navbar-nav mx-auto mb-2 mb-lg-0"
                                    id="navbar-navlist"
                                >
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="home">
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
                    <section className="bg-half-170 d-table w-100" id="home">
                        <div className="bg-overlay bg-gradient-primary opacity-1"></div>
                        <Container>
                            <Row className="align-items-center mt-5">
                                <div className="col-lg-6 col-md-7">
                                    <div className="title-heading mt-4">
                                        <h1 className="heading mb-3">Build and grow your <br /> <span className="text-gradient-primary typewrite" data-period="2000" data-type='[ "Agency", "Software", "Technology", "Studio", "Webapps" ]'> <span className="wrap"></span> </span> Solution</h1>
                                        <p className="para-desc text-muted">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        <div className="mt-4">
                                            <Link2 to="#" className="btn btn-outline-primary rounded">Learn More</Link2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div className="position-relative">
                                        <img src={AboutImage} className="rounded-md img-fluid mx-auto d-block" alt="" />
                                        <div className="play-icon">
                                            <a
                                                href="#!"
                                                data-type="youtube"
                                                data-id="yba7hPeTSjk"
                                                onClick={this.openModal}
                                                className="play-btn lightbox">
                                                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>

                    <Services />
                    <About />
                    <Pricing />
                    <Blog />
                    <Contact />
                    <Footer />
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.videoModal}
                    videoId="yba7hPeTSjk"
                    onClose={() => this.setState({ videoModal: false })}
                />
            </React.Fragment>
        );
    }
}

export default IndexSix;
