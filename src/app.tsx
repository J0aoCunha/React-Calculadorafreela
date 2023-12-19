import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer'
import Header from './components/Header/Header'
import { Separator } from './components/separator/Separator'

export function App() {
  return (
    <>
      <Header />
      <Separator content="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:" />
      <CalculatorContainer />
    </>
  )
}
