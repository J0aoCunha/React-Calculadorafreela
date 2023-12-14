import { Data } from './Data/Data'

import './Calculate.css'
import { FormEvent } from 'react'

export function Calculate() {
  const NewCalc = (event: FormEvent) => {
    event.preventDefault()

    console.log('funcionou')
  }

  return (
    <div>
      <div className="Data-area">
        <form className="content-data" onSubmit={NewCalc}>
          <Data
            placeholder="3000.00"
            title="Quanto você quer ganhar por mês (líquido)?"
            descriptionSpan="R$/mês"
          />
          <Data
            title="Quantas horas você quer trabalhar por dia?"
            descriptionSpan="Horas/dia"
            placeholder="8"
          />
          <Data
            title="Quantos dias você quer trabalhar por semana?"
            descriptionSpan="Dias/semana"
            placeholder="5"
          />
          <Data
            title="Quantas semanas por ano você gostaria de tirar férias?"
            descriptionSpan="semanas/ano"
            placeholder="4"
          />
          <span>
            Custo de licenças e sistemas, internet, luz, celular, entre outros
          </span>
          <Data
            title="Qual os seus custos mensais relacionados ao trabalho?"
            descriptionSpan="R$/mês"
            placeholder="500.00"
          />
          <button type="submit">CALCULAR</button>
        </form>
      </div>
    </div>
  )
}
