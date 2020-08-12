export const costYear = (year) => {
  let base = 2000;
  let years = 0;

  years = new Date().getFullYear() - year;
  base -= (years * 3 * base) / 100;

  return base;
};

// costo segun la marca
export const costBrand = (brandCar) => {
  let incremento = 0;

  switch (brandCar) {
    case "Americano":
      incremento = 1.15;

      break;

    case "Asiatico":
      incremento = 1.05;
      break;

    case "Europeo":
      incremento = 1.3;
      break;

    default:
      break;
  }

  return incremento;
};

// costo segun el plan
export const costPlan = (plan) => {
  return plan === "Basico" ? 1.2 : 1.5;
};
