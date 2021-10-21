export const calculate = (params, setResult) => {
  const { value } = params;
  const maxDeduction = 260000; // максимальная ставка вычета
  const sallaryPerYear = +value * 12; // зарплата в год
  const taxPerYear = sallaryPerYear * 0.13; // максимальный налог в год
  const months = Math.ceil(maxDeduction / taxPerYear); // количество месяцев

  const result = [];
  let summ = 0;
  for (let i = 0; i < months; i += 1) {
    if (summ + taxPerYear < maxDeduction) {
      summ += taxPerYear;
      result.push(Math.round(taxPerYear));
    } else {
      result.push(Math.round(maxDeduction - summ));
    }
  }

  setResult({ ...params, validate: true, calculated: result });
};
