import { FormEvent, useState } from 'react'
import type {
  InputProject,
  InputProjectType,
  ProjectsCost,
} from '../../@types/types'
import { calcProject, formCurrency } from '../../helpers/calcIncom'
import { FormProject } from '../FormProject/FormProject'

import ResultCard from '../Results/Results'

import './CalculatorProject.css'

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
    label: 'Você vai dar um desconto?',
    inputInfo: '%',
  },
]

function CalculatorProject() {
  const [CalcData, setCalcData] = useState({} as InputProjectType)
  const [projectDetails, setProjectDetails] = useState({} as ProjectsCost)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCalcData({ ...CalcData, [name]: Number(value) })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const formProject = calcProject(CalcData)
    setProjectDetails({
      projectValue: formCurrency.format(formProject.projectValue),
      projectValueWithAdjustment: formCurrency.format(
        formProject.projectValueWithAdjustment,
      ),
      discount: formCurrency.format(formProject.complexityAdjustment),
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
            {projectDetails.projectValue}
            <span>/hora</span>
          </h2>
          <p>
            O custo do projeto com desconto ou com adicional de complexidade é:
          </p>
          <h2>
            {projectDetails.projectValueWithAdjustment}
            <span>/mês</span>
          </h2>

          <p>O valor do adicional de complexidade ou desconto é:</p>
          <h2 className="discount"> - {projectDetails.discount}</h2>
        </ResultCard>
      </div>
    </div>
  )
}

export default CalculatorProject
