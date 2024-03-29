import { Fragment } from "react";
import AboutContainer from "../Components/AboutContainer";
import "./About.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <Fragment>
      <div className="outer-about-main-component">
        <div className="front-page-component">
          <div className="para-with-name-container">
            <p>
              <span>&ldquo;</span>
              What we must do is not to content ourselves with mere political
              democracy. We must make our political democracy a social democracy
              as well. Political democracy cannot last unless there is at the
              base of it, a social democracy.<span>&quot;</span>
            </p>
            <h3>- Dr. Babasaheb Ambedkar</h3>
          </div>
          <div className="image-about-component">
            <img src="/baba.png" alt="loading.." />
          </div>
        </div>
        <div className="seconds-page-container">
          <AboutContainer />
        </div>

        {/* third page start here */}
        <div className="third-page-container"></div>
        {/* third page End here */}

        <div className="footer-page-container">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
