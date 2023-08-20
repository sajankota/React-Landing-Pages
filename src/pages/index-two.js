import React, { Component } from "react";
import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

import LogoDark from "../assets/images/logo-dark.png";

import * as Icon from "react-feather";
import {
    Container,
    Row,
    Nav,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";

import BackgroudImage from "../assets/images/bg-2.jpg";

import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

class IndexTwo extends Component {
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
                        className="navbar navbar-expand-lg fixed-top sticky"
                    >
                        <div className="container">
                            <NavbarBrand href="/#">
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
                                    className="navbar-nav me-auto mb-2 mb-lg-0"
                                    id="navbar-navlist"
                                >
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="home">
                                            Home
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="service">
                                            Services
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="about">
                                            About Us
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="price">
                                            Pricing
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="blog">
                                            Blogs
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link activeClassName="active" spy={true} smooth={true} duration={500} className="nav-link" to="contact">
                                            Contact Us
                                        </Link>
                                    </NavItem>
                                </Nav>

                                <ul className="list-inline menu-social mb-0 ps-lg-4 ms-2">
                                    <li className="list-inline-item">
                                        <Link2
                                            to="/login"
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

                    <section className="bg-half-260 d-table w-100" style={{ background: `url(${BackgroudImage}) top center` }} id="home">
                        <Container>
                            <Row>
                                <div className="col-12">
                                    <div className="title-heading">
                                        <h4 className="heading mb-4">Get Things Done By <br /> Great Remote Team</h4>
                                        <p className="text-muted para-desc mb-0">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                                        <div className="subcribe-form mt-4 pt-2">
                                            <form>
                                                <div className="mb-2">
                                                    <input className="rounded-pill" placeholder="Email Address / Phone Number" />
                                                    <button type="submit" className="btn btn-pills btn-primary border-0">Register Now</button>
                                                </div>
                                            </form>
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
            </React.Fragment>
        );
    }
}

export default IndexTwo;
