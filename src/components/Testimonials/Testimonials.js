import "./Testimonials.css";

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "Operations Manager",
    review:
      "The AI automation platform transformed our daily workflows. We reduced manual effort by over 60% while improving decision accuracy.",
  },
  {
    name: "Rahul Mehta",
    role: "Business Analyst",
    review:
      "The analytics dashboard delivers real-time insights that help our team make faster and more confident business decisions.",
  },
  {
    name: "Priya Sharma",
    role: "Technology Lead",
    review:
      "Integration was effortless. The platform connected seamlessly with our existing systems and significantly improved productivity.",
  },
  {
    name: "Arjun Nair",
    role: "CEO",
    review:
      "An impressive enterprise solution with outstanding performance, security, and an exceptional user experience.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">

      <div className="container">

        <div className="testimonials-header">

          <span className="testimonial-tag">
            TESTIMONIALS
          </span>

          <h2>
            Clients' Success Stories
          </h2>

          <p>
            Discover how organizations are transforming
            their businesses with our AI-powered platform.
          </p>

        </div>

        <div className="testimonial-slider">

          <div className="testimonial-track">

            {[...testimonials, ...testimonials].map((item, index) => (

              <div
                className="testimonial-card"
                key={index}
              >

                <div className="stars">
                  ★★★★★
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <div className="author">

                  <h3>{item.name}</h3>

                  <span>{item.role}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;