import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="Images/logo.png" alt="Legalion" />
            </div>
            <p className="footer-description">
              Where Law Meets Technology, and Businesses Move Forward with
              innovative solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Legal Services</a>
                </li>
                <li>
                  <a href="#services">IT Solutions</a>
                </li>
                <li>
                  <a href="#services">Digital Marketing</a>
                </li>
                <li>
                  <a href="#services">Consulting</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>+91 9945293599</li>
                <li>info@Legalion.co.in</li>
                <li>Bhubaneswar, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Legalion. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
