import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer'
import CalculatorProject from './components/CalculatorContainerProject/CalculatorProject'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Separator } from './components/separator/Separator'

export function App() {
  return (
    <>
      <Header />
      <Separator content="Para você que é MEI ou quer se tornar MEI, calcule o valor da sua hora de trabalho:" />
      <CalculatorContainer />
      <Separator content="Calcule o valor a ser cobrado para um projeto:" />
      <CalculatorProject />
      <Footer />
    </>
  )
}
