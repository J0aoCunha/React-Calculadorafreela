import './Calculate.css'
import Data from './data/Data'

export function Calculate() {
  return (
    <div>
      <div className="Data-area">
        <form>
          <div className="content-data">
            <Data
              placeholder="3000.00"
              title="Quanto você quer ganhar por mês (líquido)?"
              descriptionSpan="R$/mês"
            />
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
    </div>
  )
}
