import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header/Header'
import { Separator } from './components/separator/Separator'

import './global.css'
import { Calculate } from './components/Calculate/Calculate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Separator content="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:" />
    <section className="Container-Calculate">
      <Calculate />
    </section>

    <Separator content="Calcule o valor a ser cobrado para um projeto:" />
  </React.StrictMode>,
)
