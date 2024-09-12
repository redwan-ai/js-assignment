function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || income < expense) {
    return "Invalid Input";
  }

  let profit = income - expense;

  let tax = profit * 0.20;

  return tax;
}