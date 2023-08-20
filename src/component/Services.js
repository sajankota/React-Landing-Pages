import React, { Component } from "react";
import { Link as Link2 } from "react-router-dom";

class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* Start */}
        <section className="section" id="service">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 mb-4 pb-2">
                <div className="section-title text-center">
                  <h4 className="title mb-4">
                    We are build awesome <br /> marketing template
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>
                </div>
              </div>
            </div>
            <div className="row position-relative z-index-1">
              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="features feature-primary shadow p-4 rounded-md text-center bg-white">
                  <div className="icons text-center">
                    <i className="uil uil-adjust-circle text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Link2 to="#" className="title text-dark h5">
                      Grow Your Business
                    </Link2>
                    <p className="text-muted mt-3">
                      The phrasal sequence of the is now so that many campaign
                      and benefit
                    </p>

                    <div className="mt-4 pt-2">
                      <Link2 to="#" className="btn btn-link primary">
                        Read More <i className="uil uil-arrow-right"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="features feature-primary shadow p-4 rounded-md text-center bg-white">
                  <div className="icons text-center">
                    <i className="uil uil-circuit text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Link2 to="#" className="title text-dark h5">
                      Drive More Sales
                    </Link2>
                    <p className="text-muted mt-3">
                      The phrasal sequence of the is now so that many campaign
                      and benefit
                    </p>

                    <div className="mt-4 pt-2">
                      <Link2 to="#" className="btn btn-link primary">
                        Read More <i className="uil uil-arrow-right"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="features feature-primary shadow p-4 rounded-md text-center bg-white">
                  <div className="icons text-center">
                    <i className="uil uil-fire text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Link2 to="#" className="title text-dark h5">
                      Handled By Expert
                    </Link2>
                    <p className="text-muted mt-3">
                      The phrasal sequence of the is now so that many campaign
                      and benefit
                    </p>

                    <div className="mt-4 pt-2">
                      <Link2 to="#" className="btn btn-link primary">
                        Read More <i className="uil uil-arrow-right"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                <div className="features feature-primary shadow p-4 rounded-md text-center bg-white">
                  <div className="icons text-center">
                    <i className="uil uil-flower text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Link2 to="#" className="title text-dark h5">
                      Discussion For Idea
                    </Link2>
                    <p className="text-muted mt-3">
                      The phrasal sequence of the is now so that many campaign
                      and benefit
                    </p>

                    <div className="mt-4 pt-2">
                      <Link2 to="#" className="btn btn-link primary">
                        Read More <i className="uil uil-arrow-right"></i>
                      </Link2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;