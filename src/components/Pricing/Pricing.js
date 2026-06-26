import "./Pricing.css";
import { useState, useMemo, memo } from "react";
import pricingData from "../../data/pricingData";
import {
  calculatePrice,
  currencySymbol,
} from "../../utils/pricingHelper";

const PricingCard = memo(
  ({ title, data, billing, currency, recommended }) => {
    const price = useMemo(() => {
      return calculatePrice(
        data.base,
        currency,
        billing,
        data.tariff
      );
    }, [billing, currency, data]);

    return (
      <div
        className={`pricing-card ${
          recommended ? "recommended" : ""
        }`}
      >
        {recommended && (
          <div className="recommended-badge">
            Most Popular
          </div>
        )}

        <h2>{title}</h2>

        <div className="price-box">
          <span className="currency">
            {currencySymbol(currency)}
          </span>

          <span className="price">
            {price}
          </span>

          <span className="duration">
            /
            {billing === "monthly"
              ? "month"
              : "year"}
          </span>
        </div>

        <ul className="feature-list">
          {data.features.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>

        <button className="pricing-btn">
          Start Free Trial
        </button>
      </div>
    );
  }
);

function Pricing() {
  const [billing, setBilling] =
    useState("monthly");

  const [currency, setCurrency] =
    useState("USD");

  return (
    <section
      className="pricing-section"
      id="pricing"
    >
      <div className="container">

        <div className="pricing-header">

          <span className="pricing-tag">
            PRICING
          </span>

          <h2>
  Flexible Plans for Every Business
</h2>

<p>
  Choose the perfect AI subscription for your
  organization with transparent pricing,
  multiple currencies and annual savings.
</p>

        </div>

        <div className="pricing-controls">

          <div className="billing-toggle">

            <button
              className={
                billing === "monthly"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setBilling("monthly")
              }
            >
              Monthly
            </button>

            <button
              className={
                billing === "annual"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setBilling("annual")
              }
            >
              Annual
            </button>

          </div>

          <select className="currency-select"
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value)
            }
          >
            <option value="USD">
              USD ($)
            </option>

            <option value="INR">
              INR (₹)
            </option>

            <option value="EUR">
              EUR (€)
            </option>

          </select>

        </div>

        <div className="pricing-grid">
                      {Object.entries(pricingData).map(
            ([title, data], index) => (
              <PricingCard
                key={title}
                title={title}
                data={data}
                billing={billing}
                currency={currency}
                recommended={index === 1}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default Pricing;