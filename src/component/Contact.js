import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* Start */}
        <section className="section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 mb-4 pb-2">
                <div className="section-title text-center">
                  <h4 className="title mb-4">Get In Touch!</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-12 mt-4 pt-2">
                <form method="post" id="myForm" name="myForm">
                  <p className="mb-0" id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-4">
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="Name :"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="mb-4">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control"
                              placeholder="Email :"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="mb-4">
                            <input
                              name="subject"
                              id="subject"
                              className="form-control"
                              placeholder="Subject :"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mb-4">
                        <textarea
                          name="comments"
                          id="comments"
                          rows={4}
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-primary btn-pills border-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
