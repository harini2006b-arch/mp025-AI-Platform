import "./Features.css";
import { useState, useEffect } from "react";

const featureData = [
  {
    title: "AI Automation",
    description:
      "Automate repetitive business workflows with intelligent AI pipelines.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Generate forecasts and uncover trends using real-time AI insights.",
  },
  {
    title: "Enterprise Security",
    description:
      "Advanced encryption, authentication and compliance built in.",
  },
  {
    title: "API Integration",
    description:
      "Connect seamlessly with CRMs, ERPs and third-party platforms.",
  },
  {
    title: "Workflow Builder",
    description:
      "Design automation workflows visually without writing code.",
  },
  {
    title: "Business Intelligence",
    description:
      "Interactive dashboards and reports for smarter decisions.",
  },
];

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 992
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <section
      className="features-section"
      id="features"
    >
      <div className="container">

        <div className="features-heading">

          <span>FEATURES</span>

          <h2>
            Powerful AI Capabilities
          </h2>

          <p>
            Everything your organization needs
            to automate, analyze and
            scale intelligently.
          </p>

        </div>

        {!isMobile ? (

          <div className="bento-grid">

                      {featureData.map((feature, index) => (

            <div
              key={index}
              className={`bento-card ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() =>
                setActiveIndex(index)
              }
            >

              <div className="feature-number">
                0{index + 1}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          ))}

          </div>

        ) : (

          <div className="accordion">

            {featureData.map((feature, index) => (

              <div
                className="accordion-item"
                key={index}
              >

                <button
                  className="accordion-header"
                  onClick={() =>
                    setActiveIndex(
                      activeIndex === index
                        ? -1
                        : index
                    )
                  }
                >

                  <span>
                    {feature.title}
                  </span>

                  <span className="accordion-icon">

                    {activeIndex === index
                      ? "−"
                      : "+"}

                  </span>

                </button>

                {activeIndex === index && (

                  <div className="accordion-content">

                    <p>
                      {feature.description}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>
                  )}

      </div>

    </section>

  );
}

export default Features;