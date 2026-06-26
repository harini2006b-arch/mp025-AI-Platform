const pricingData = {
  Starter: {
    base: 19,
    tariff: {
      INR: 85,
      USD: 1,
      EUR: 0.92,
    },
    features: [
      "5 AI Automations",
      "Analytics Dashboard",
      "Email Support",
    ],
  },

  Professional: {
    base: 49,
    tariff: {
      INR: 85,
      USD: 1,
      EUR: 0.92,
    },
    features: [
      "Unlimited Automations",
      "AI Insights",
      "Priority Support",
      "Team Collaboration",
    ],
  },

  Enterprise: {
    base: 99,
    tariff: {
      INR: 85,
      USD: 1,
      EUR: 0.92,
    },
    features: [
      "Unlimited Everything",
      "Dedicated AI Assistant",
      "24/7 Support",
      "Advanced Security",
      "Custom Integrations",
    ],
  },
};

export default pricingData;