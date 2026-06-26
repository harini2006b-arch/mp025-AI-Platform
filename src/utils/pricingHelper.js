export function calculatePrice(base, currency, billing, tariff) {
  let price = base;

  if (billing === "annual") {
    price = price * 12 * 0.8;
  }

  price *= tariff[currency];

  return Math.round(price);
}

export function currencySymbol(currency) {
  switch (currency) {
    case "INR":
      return "₹";
    case "EUR":
      return "€";
    default:
      return "$";
  }
}