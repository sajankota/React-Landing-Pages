import React, { Component } from "react";
import * as Icon from 'react-feather';
import { Link as Link2 } from "react-router-dom";

import LogoLight from "../assets/images/logo-light.png";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/*  Start Footer  */}
        <footer className="bg-footer footer-bar">
          <div className="footer-py-30">
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col-sm-3">
                  <div className="text-sm-start">
                    <Link2 to="#" className="logo-footer">
                      <img src={LogoLight} alt="" />
                    </Link2>
                  </div>
                </div>

                <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="text-center">
                    <p className="mb-0">
                      © {new Date().getFullYear()} Valexy. Design with{" "}
                      <i className="mdi mdi-heart text-danger"></i> by{" "}
                      <Link2
                        to="#"
                        className="text-reset"
                      >
                        Shreethemes
                      </Link2>
                      .
                    </p>
                  </div>
                </div>

                <div className="col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                    <li className="list-inline-item mb-0">
                      <Link2 to="#">
                        <Icon.Facebook
                          className="fea icon-sm fea-social"
                        />
                      </Link2>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Link2 to="#">
                        <Icon.Instagram
                          className="fea icon-sm fea-social"
                        />
                      </Link2>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Link2 to="#">
                        <Icon.Twitter
                          className="fea icon-sm fea-social"
                        />
                      </Link2>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Link2 to="#">
                        <Icon.Linkedin
                          className="fea icon-sm fea-social"
                        />
                      </Link2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer  */}
      </React.Fragment>
    );
  }
}

export default Footer;
