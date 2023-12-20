import Logo from '../../assets/logo2.svg'

import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="subFooter">
        <p>
          Projeto desenvolvido na 10ª edição do Primeiros Passos na Programação
          da Trybe.
        </p>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}
