import logo from '../../assets/logoTrybe.svg'
import ppp from '../../assets/text.svg'

import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" />
        <div className="header__brand">
          <div className="ppp-logo">
            <img src={ppp} alt="" />
          </div>

          <span />

          <div className="header__desc">
            <h1>Calculadora Freelancer</h1>
            <p>Aprenda como precificar o seu trabalho como freelancer!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
