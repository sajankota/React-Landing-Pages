import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";

import Laptop from "../assets/images/laptop.png";
import AboutImage from "../assets/images/about.png";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoModal: false,
    };

    this.openModal = this.openModal.bind(this);
  }

  /**
   * Video modal open
   */
  openModal() {
    this.setState({ videoModal: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light overflow-hidden" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="position-relative">
                  <img
                    src={AboutImage}
                    className="rounded-md img-fluid mx-auto d-block"
                    alt=""
                  />
                  <div className="play-icon">
                    <Link2 to="#"
                      data-type="youtube"
                      data-id="yba7hPeTSjk"
                      onClick={this.openModal}
                      className="play-btn lightbox"
                    >
                      <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                    </Link2>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title ms-lg-5">
                  <h4 className="title mb-4">
                    Unlimited Possibilities. <br /> 1st Class Templates.
                  </h4>
                  <p className="text-muted para-desc mb-0">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>

                  <div className="d-inline-flex rounded-md shadow p-4 bg-white mt-4">
                    <i className="uil uil-shop display-4 mb-0 opacity-5"></i>

                    <div className="content ms-3">
                      <h5>Open your own shop</h5>
                      <p className="text-muted">
                        This is just a simple text made <br /> for this unique
                        and awesome template
                      </p>
                      <Link2
                        to="#"
                        className="btn btn-primary btn-pills border-0"
                      >
                        Learn More
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="section-title me-lg-4">
                  <h1 className="title mb-3">Why Choose us ?</h1>
                  <p className="para-desc text-muted">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>

                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex align-items-center pt-4">
                        <i className="uil uil-pathfinder text-gradient-primary h2"></i>
                        <div className="ms-3">
                          <h5>Fully Secured</h5>
                          <p className="text-muted mb-0">
                            Moreover, in Latin only words at the beginning of
                            sentences are capitalized.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end col */}

                    <div className="col-12">
                      <div className="d-flex align-items-center pt-4">
                        <i className="uil uil-bell text-gradient-primary h2"></i>
                        <div className="ms-3">
                          <h5>Best Performance</h5>
                          <p className="text-muted mb-0">
                            If the fill text is intended to illustrate the
                            characteristics of sometimes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pt-4">
                      <a className="btn btn-outline-primary">
                        Install Now <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div className="laptop-image">
                  <div className="position-relative">
                    <img src={Laptop} className="mx-auto d-block" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Start --> */}
        <section className="section bg-gradient-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title text-white mb-4">
                    Subscribe our Newsletter
                  </h4>
                  <p className="text-white-50 mx-auto para-desc mb-0">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="text-center subcribe-form mt-4 pt-2">
                  <form className="mx-auto">
                    <div className="form-group mb-0">
                      <input
                        type="email"
                        id="subscribe_email"
                        name="email"
                        className="rounded-pill"
                        placeholder="Your Email Id"
                      />
                      <button
                        type="submit"
                        className="btn btn-pills btn-primary border-0"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default About;
