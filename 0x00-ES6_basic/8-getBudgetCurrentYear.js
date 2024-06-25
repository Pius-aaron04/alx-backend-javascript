function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};
  
    budget['income-2024}'] = income;
    budget['gdp-2024'] = gdp;
    budget['capita-2024'] = capita;
  
    return budget;
  }