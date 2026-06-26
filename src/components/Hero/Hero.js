import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Animated Background */}
      <div className="cube-background">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            className="cube"
            style={{ "--i": i }}
          ></span>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">

        {/* Left Side */}

        <div className="hero-left">

          <span className="hero-tag">
            AI Powered Platform
          </span>

          <h1>
            Power Your
            <br />
            Future with <span>AI</span>
          </h1>

          <p>
            Deploy intelligent AI agents and automate
            complex workflows using a modern,
            scalable platform built for enterprises.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side Dashboard */}

        <div className="hero-right">

          <div className="dashboard-card">

            <div className="dashboard-header">

              <div>
                <h3>AI Analytics</h3>
                <p>Live Business Overview</p>
              </div>

              <div className="status">
                ● Live
              </div>

            </div>

            <div className="stats-grid">

              <div className="stat-box">
                <h4>Automation</h4>
                <span>94%</span>
              </div>

              <div className="stat-box">
                <h4>Revenue</h4>
                <span>$1.2M</span>
              </div>

              <div className="stat-box">
                <h4>Users</h4>
                <span>12.8K</span>
              </div>

              <div className="stat-box">
                <h4>AI Score</h4>
                <span>98.6</span>
              </div>

            </div>

            <div className="activity">

              <div className="activity-item">

                <span className="dot"></span>

                <p>Workflow Automation Completed</p>

                <strong>+28%</strong>

              </div>

              <div className="activity-item">

                <span className="dot"></span>

                <p>Prediction Accuracy</p>

                <strong>99.2%</strong>

              </div>

              <div className="activity-item">

                <span className="dot"></span>

                <p>System Performance</p>

                <strong>Excellent</strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;