import { BsEnvelopeFill, BsLink, BsTelephoneFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <section id="footer">
        <h2>Let's Talk!</h2>
        <div className="myinfo">
          <div className="contact-info">
            <h5>
              <BsTelephoneFill />
              <br />
              Phone Me: <br />
              <div className="small">+91 876 681 3856</div>
            </h5>
          </div>
          <div className="contact-info">
            <h5>
              <BsEnvelopeFill />
              <br />
              Email Me: <br />
              <div className="small">prajwalkuchewar3@gmail.com</div>
            </h5>
          </div>
          <div className="contact-info">
            <h5>
              <BsLink />
              <br />
              Follow Me: <br />
              <div className="small">
                <a
                  href="https://linkedin.com/in/prajwal018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/prajwal018
                </a>
              </div>
            </h5>
          </div>
        </div>
        <br />
        <Link to="/contact">
          <button className="button">Hire Me</button>
        </Link>
      </section>
      <div className="copyright">
        <p>&copy; 2023 Prajwal Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
