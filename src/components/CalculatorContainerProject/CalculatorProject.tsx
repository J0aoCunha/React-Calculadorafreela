import { FormEvent, useState } from 'react'
import type {
  InputProject,
  InputProjectType,
  ProjectsCost,
} from '../../@types/types'
import { calcProject, formCurrency } from '../../helpers/calcIncom'

import ResultCard from '../Results/Results'

import './CalculatorProject.css'
import { FormProject } from '../FormProject/FormProject'

const InputProjects: InputProject[] = [
  {
    id: 'hourlyRate',
    label: 'Qual o valor da sua hora de trabalho?',
    inputInfo: 'R$/hora',
  },
  {
    id: 'workHours',
    label: 'Quantas horas por dia você vai trabalhar no projeto?',
    inputInfo: 'horas/dia',
  },
  {
    id: 'workDays',
    label: 'Quantas dias você vai trabalhar no projeto',
    inputInfo: 'dias',
  },
  {
    id: 'discountProject',
    label:
      'Você vai dar um desconto? O quer inserir um adicional de complexidade?',
    inputInfo: '%',
  },
]

function CalculatorProject() {
  const [formData, setFormData] = useState({} as InputProjectType)
  const [salaryDetails, setSalaryDetails] = useState({} as ProjectsCost)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const formResult = calcProject(formData)
    setSalaryDetails({
      hourlyRate: formCurrency.format(formResult.hourlyRate),
      monthlyGrossIncome: formCurrency.format(formResult.monthlyGrossIncome),
    })
  }

  return (
    <div className="calculator__project ">
      <div className="container">
        <FormProject
          InputProjects={InputProjects}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <ResultCard>
          <p>O custo do projeto é:</p>
          <h2>
            {salaryDetails.hourlyRate}
            <span>/hora</span>
          </h2>
          <p>
            O custo do projeto com desconto ou com adicional de complexidade é:
          </p>
          <h2>
            {salaryDetails.monthlyGrossIncome}
            <span>/mês</span>
          </h2>

          <p>O valor do adicional de complexidade ou desconto é:</p>
          <h2 className="discount"> -R$ 100,00</h2>
        </ResultCard>
      </div>
    </div>
  )
}

export default CalculatorProject
