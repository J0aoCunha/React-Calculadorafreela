export type InputField = {
  id: string
  label: string
  inputInfo: string
}
export type InputProject = {
  id: string
  label: string
  inputInfo: string
}

export type FormDataType = {
  monthlyNetSalary: number
  workHoursPerDay: number
  workDaysPerWeek: number
  vacationWeeksPerYear: number
  monthlyExpenses: number
}

export type InputProjectType = {
  hourlyRate: number
  workHours: number
  workDays: number
  discountProject: number
}
export type ProjectsCost = {
  projectValue: string
  projectValueWithAdjustment: string
  discount: string
}

export type SalaryDetailsType = {
  hourlyRate: string
  monthlyGrossIncome: string
}
