import React, { Component } from "react";

import Image1 from "../assets/images/blog-1.jpg";
import Image2 from "../assets/images/blog-2.jpg";
import Image3 from "../assets/images/blog-3.jpg";

import { Link as Link2 } from 'react-router-dom';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: [
        {
          id: "1",
          title: "Creativity is nothing but a mind set free",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: Image1,
        },
        {
          id: "2",
          title: "Quality Resourcing",
          description:
            "When an unknown printer took a galley of type and scrambled it.",
          image: Image2,
        },
        {
          id: "3",
          title: "Business Services",
          description:
            "It has survived not only five centuries but leap in typesetting.",
          image: Image3,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 mb-4 pb-2">
                <div className="section-title text-center">
                  <h4 className="title mb-4">
                    Check out our latest <br /> news & articles
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {this.state.blog.map((item, key) => (
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={key}>
                  <div className="blog blog-primary">
                    <img
                      src={item.image}
                      className="img-fluid rounded-md shadow"
                      alt=""
                    />
                    <div className="p-4 pb-0">
                      <Link2 to="#" className="title text-dark h5">
                        {item.title}
                      </Link2>

                      <p className="text-muted mt-3 mb-0">{item.description}</p>

                      <div className="mt-3">
                        <Link2 to="#" className="btn btn-link primary">
                          Read More <i className="uil uil-arrow-right"></i>
                        </Link2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
