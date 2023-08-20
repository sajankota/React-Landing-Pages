import React, { Component } from "react";

import { Link as Link2 } from 'react-router-dom';

class Pricing extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                 {/* Start */}
                <section className="section" id="price">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 mb-4 pb-2">
                                <div className="section-title text-center">
                                    <h4 className="title mb-4">Choose our package <br /> & Active to premium</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row position-relative z-index-1">
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing pricing-primary shadow rounded-md text-center bg-white">
                                    <div className="border-bottom p-4">
                                        <div className="icons text-center mb-4">
                                            <i className="uil uil-trees text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                                        </div>

                                        <h4 className="text-gradient-primary">Basic</h4>
                                    
                                        <div className="d-flex justify-content-center mb-0">
                                            <span className="h5 mb-0 mt-2">$</span>
                                            <span className="price h2 mb-0">19</span>
                                            <span className="h5 align-self-end mb-1">/month</span>
                                        </div>
                                    </div>

                                    <div className="p-4 text-start">
                                        <h5>Pricing Features:</h5>

                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                        </ul>
                                        
                                        <Link2 to="#" className="btn btn-primary btn-pills border-0 w-100 mt-4">Get Started</Link2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing pricing-primary shadow rounded-md text-center bg-white">
                                    <div className="border-bottom p-4">
                                        <div className="icons text-center mb-4">
                                            <i className="uil uil-shield text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                                        </div>

                                        <h4 className="text-gradient-primary">Premium</h4>
                                    
                                        <div className="d-flex justify-content-center mb-0">
                                            <span className="h5 mb-0 mt-2">$</span>
                                            <span className="price h2 mb-0">39</span>
                                            <span className="h5 align-self-end mb-1">/month</span>
                                        </div>
                                    </div>

                                    <div className="p-4 text-start">
                                        <h5>Pricing Features:</h5>

                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                        </ul>
                                        
                                        <Link2 to="#" className="btn btn-primary btn-pills border-0 w-100 mt-4">Get Started</Link2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                                <div className="pricing pricing-primary shadow rounded-md text-center bg-white">
                                    <div className="border-bottom p-4">
                                        <div className="icons text-center mb-4">
                                            <i className="uil uil-rocket text-white d-flex align-items-center justify-content-center rounded-pill h3 mb-0 mx-auto"></i>
                                        </div>

                                        <h4 className="text-gradient-primary">Business</h4>
                                    
                                        <div className="d-flex justify-content-center mb-0">
                                            <span className="h5 mb-0 mt-2">$</span>
                                            <span className="price h2 mb-0">99</span>
                                            <span className="h5 align-self-end mb-1">/month</span>
                                        </div>
                                    </div>

                                    <div className="p-4 text-start">
                                        <h5>Pricing Features:</h5>

                                        <ul className="list-unstyled mb-0 ps-0">
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                            <li className="text-muted mb-0"><span className="icon h5 me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                        </ul>
                                        
                                        <Link2 to="#" className="btn btn-primary btn-pills border-0 w-100 mt-4">Get Started</Link2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }

}

export default Pricing;
