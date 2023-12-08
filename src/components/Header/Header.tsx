import logoTrybe from '../../assets/logoTrybe.svg'
import text from '../../assets/text.svg'

import './Header.css'

export function Header() {
  return (
    <header className="Header-container">
      <div className="Logo-header">
        <img className="Logo" src={logoTrybe} alt="Logo da Trybe" />
      </div>
      <div className="Content-header">
        <div>
          <img
            className="Text"
            src={text}
            alt="Texto sobre primeiros passos."
          />
        </div>

        <span></span>

        <div className="Content-Texts">
          <div className="Text-1">
            <h3>Calculadora Freelancer</h3>
          </div>
          <div className="text-2">
            <span>
              Aprenda como precificar o seu <br /> trabalho como freelancer!
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
