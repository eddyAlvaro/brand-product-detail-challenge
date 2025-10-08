export const formatCurrency = (value: number, locale = "es-CL", currency = "CLP") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
