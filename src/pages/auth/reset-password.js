import React, { Component } from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/images/logo-icon-64.png";
import BackgroudImage from "../../assets/images/bg-3.jpg";

class ResetPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="back-to-home">
                    <Link to="#" className="back-button btn btn-icon btn-primary btn-pills border-0"><i className="uil uil-arrow-left"></i></Link>
                </div>
                {/* <!-- Hero Start --> */}
                <section className="cover-user bg-white">
                    <div className="container-fluid px-0">
                        <div className="row g-0 position-relative">
                            <div className="col-lg-4 cover-my-30 order-2">
                                <div className="cover-user-img d-flex align-items-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex flex-column auth-hero">
                                                <div className="mt-md-5 text-center">
                                                    <Link to="#"><img src={LogoImage} alt="" /></Link>
                                                </div>
                                                <div className="title-heading my-lg-auto">
                                                    <div className="card login-page border-0" style={{ zIndex: 1 }}>
                                                        <div className="card-body p-0">
                                                            <h4 className="card-title">Recover Account</h4>
                                                            <form className="login-form mt-4">
                                                            <div className="row">
                                                            <div className="col-lg-12">
                                                                <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                                <div className="mb-3">
                                                                    <label className="form-label">Email address <span className="text-danger">*</span></label>
                                                                    <input type="email" className="form-control" placeholder="Enter Your Email Address" name="email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <button className="btn btn-primary btn-pills border-0 w-100">Send</button>
                                                            </div>
                                                            <div className="mx-auto">
                                                                <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link to="/auth-login" className="text-dark fw-bold">Sign in</Link></p>
                                                            </div>
                                                        </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-md-5 text-center">
                                                    <p className="mb-0 text-muted">© {new Date().getFullYear()} Valexy. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="#" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 offset-lg-4 padding-less img order-1"
                                style={{ backgroundImage: `url(${BackgroudImage})` }}
                            ></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ResetPassword;