import React from 'react'
import ReactDOM from 'react-dom/client'
import logoTrybe from './assets/logoTrybe.svg'
import text from './assets/text.svg'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
