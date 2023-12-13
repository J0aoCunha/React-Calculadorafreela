import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header/Header'
import { Separator } from './components/separator/Separator'
import { Calculate } from './components/Calculate/Calculate'
import { Results } from './components/Results/Results'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Separator content="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:" />
    <section className="Container-Calculate">
      <Calculate />
      <Results />
    </section>
    <Separator content="Calcule o valor a ser cobrado para um projeto:" />
  </React.StrictMode>,
)
