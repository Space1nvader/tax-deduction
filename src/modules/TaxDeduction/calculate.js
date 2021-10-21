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
      result.push(taxPerYear);
    } else {
      result.push(maxDeduction - summ);
    }
  }

  console.log('зп за год', sallaryPerYear);
  console.log('максимальный налог', taxPerYear);
  console.log('в месяц ', maxDeduction / taxPerYear);
  console.log('итог ', result);

  setResult({ ...params, calculated: result });
};
