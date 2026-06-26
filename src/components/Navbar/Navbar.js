import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          MP025 <span className="logo-highlight">AI</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Reviews</a>
        </nav>

        {/* Buttons */}
        <div className="nav-actions">
          <button className="btn-outline">
            Login
          </button>

          <button className="btn-primary">
            Get Started
          </button>
        </div>

      </div>

    </header>
  );
}

export default Navbar;