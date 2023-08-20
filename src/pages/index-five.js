import React, { Component } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import * as Icon from "react-feather";

import BackgroudImage from "../assets/images/bg-3.jpg";

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

class IndexFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      arrow: false,
      videoModal: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.openModal = this.openModal.bind(this);
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
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="home"
                    >
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="service"
                    >
                      Services
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="about"
                    >
                      About Us
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="price"
                    >
                      Pricing
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="blog"
                    >
                      Blogs
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="nav-link"
                      to="contact"
                    >
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

          {/* <!-- Start Hero --> */}
          <section
            className="bg-half-170 d-table w-100 "
            style={{ background: `url(${BackgroudImage}) center center` }}
            id="home"
          >
            <div className="bg-overlay"></div>
            <Container>
              <Row className="justify-content-end mt-5">
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="card shadow rounded-md border-0 ms-xl-5">
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        Get 30 days FREE Trial
                      </h4>

                      <form className="login-form mt-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label fs-6">
                                First name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First Name"
                                  name="s"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label fs-6">
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email"
                                  name="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label fs-6">
                                Password <span className="text-danger">*</span>
                              </label>
                              <div className="form-icon position-relative">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label fs-6"
                                  htmlFor="flexCheckDefault"
                                >
                                  I Accept{" "}
                                  <a href="#" className="text-primary">
                                    Terms And Condition
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="d-grid">
                              <button className="btn btn-primary btn-pills border-0">
                                Register
                              </button>
                            </div>
                          </div>
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

export default IndexFive;
