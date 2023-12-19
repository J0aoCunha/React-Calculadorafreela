import { FormDataType } from '../@types/types'

export const formCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function calcInCome({
  monthlyExpenses,
  monthlyNetSalary,
  vacationWeeksPerYear,
  workDaysPerWeek,
  workHoursPerDay,
}: FormDataType) {
  const weekPerYear = 52 - vacationWeeksPerYear
  const workDaysPerYear = weekPerYear * workDaysPerWeek

  // considerando reduçao de 10% por feriados e afins
  const produtiveHoursPerYear = workDaysPerYear * workHoursPerDay * 0.9

  const annualNetSalary = monthlyNetSalary * 12
  const annualExpenses = monthlyExpenses * 12

  // valores aproximados
  const annualTaxes = 70 * 12

  const annualGrossIncome = annualNetSalary + annualExpenses + annualTaxes
  const hourlyRate = annualGrossIncome / produtiveHoursPerYear

  const monthlyGrossIncome = annualGrossIncome / 12

  return {
    hourlyRate,
    monthlyGrossIncome,
  }
}
