import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header/Header'
import { Separator } from './components/separator/Separator'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Separator content="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:" />
    <section className="Container-Calculate">
      <div className="Data-area">
        <form>
          <div className="content-data">
            <label>Quanto você quer ganhar por mês (líquido)?</label>
            <div className="data">
              <div className="indicator">
                <span>R$/mês</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="R$ 3000,00"
              />
            </div>
            <label>Quantas horas você quer trabalhar por dia?</label>
            <div className="data">
              <div className="indicator">
                <span>Horas/dia</span>
              </div>
              <input type="text" name="hours" id="hours" placeholder="8" />
            </div>
            <label>Quantos dias você quer trabalhar por semana?</label>
            <div className="data">
              <div className="indicator">
                <span>Dias/semana</span>
              </div>
              <input type="text" name="days" id="days" placeholder="5" />
            </div>
            <label>
              Quantas semanas por ano você gostaria de tirar férias?
            </label>
            <div className="data">
              <div className="indicator">
                <span>semanas/ano</span>
              </div>
              <input type="text" name="week" id="week" placeholder="4" />
            </div>
            <label>Selecione o tipo de atividade que exerce como MEI</label>
            <input
              className="serviceProvision"
              type="text"
              name="days"
              id="days"
              placeholder="Prestação de serviços"
            />
            <label>Qual os seus custos mensais relacionados ao trabalho?</label>
            <span>
              Custo de licenças e sistemas, internet, luz, celular, entre outros
            </span>
            <div className="data">
              <div className="indicator">
                <span>R$/mês</span>
              </div>
              <input type="text" name="week" id="week" placeholder="500,00" />
            </div>
          </div>
        </form>
      </div>
      <div className="Results-area"></div>
    </section>

    <Separator content="Calcule o valor a ser cobrado para um projeto:" />
  </React.StrictMode>,
)
