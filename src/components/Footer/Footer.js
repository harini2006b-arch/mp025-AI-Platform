import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2 className="footer-logo">
            MP025 <span>AI</span>
          </h2>

          <p className="footer-about">
            Empowering businesses through AI Strategy,
            Intelligent Process Automation and Business
            Intelligence solutions designed for modern
            enterprises.
          </p>

        </div>

        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>

            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#pricing">Pricing</a>
            </li>

            <li>
              <a href="#reviews">Reviews</a>
            </li>

          </ul>

        </div>

        {/* Resources */}

        <div className="footer-column">

          <h3>Resources</h3>

          <ul>

            <li>
              <a href="/">Documentation</a>
            </li>

            <li>
              <a href="/">Support</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>

          </ul>

        </div>

        {/* Social */}

        <div className="footer-column">

          <h3>Social</h3>

          <ul>

            <li>
              <a href="/">LinkedIn</a>
            </li>

            <li>
              <a href="/">GitHub</a>
            </li>

            <li>
              <a href="/">Email</a>
            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MP025 AI. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;