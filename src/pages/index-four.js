import React, { Component } from "react";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";

import * as Icon from "react-feather";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import BackgroudImage from "../assets/images/bg.jpg";

import {
  Container,
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

class IndexThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      arrow: false,
      videoModal: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
          <section
            className="bg-half-360 pb-5 d-table w-100"
            style={{ background: `url(${BackgroudImage})` }}
            id="home"
          >
            <div className="bg-video-wrapper">
              <iframe src="https://player.vimeo.com/video/543682481?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
            </div>
            <div className="bg-overlay bg-black opacity-9"></div>
            <Container className="mb-5 pb-5">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="title-heading text-center">
                    <a
                     href="#!"
                     data-type="youtube"
                     data-id="yba7hPeTSjk"
                     onClick={this.openModal}
                      className="play-btn  mb-5 lightbox border bg-white shadow-lg"
                    >
                      <Icon.Play
                        className="fea icon-ex-md text-primary"
                      />
                    </a>

                    <h4 className="heading text-white mb-4">
                      Get Your Ticket Today!
                    </h4>
                    <p className="text-white-50 para-desc mx-auto mb-0">
                      This is just a simple text made for this unique and
                      awesome template, you can replace it with any text.
                    </p>

                    <div className="mt-4 pt-2">
                      <a href="" className="btn btn-primary btn-pills border-0">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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

export default IndexThree;
