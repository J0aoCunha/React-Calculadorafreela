import triangulo from '../../assets/triangul0.svg'

import './Separator.css'

interface Separatorprops {
  content: string
}

export function Separator(props: Separatorprops) {
  return (
    <div className="ConteinerSeparator">
      <div className="Separator">
        <h3>{props.content}</h3>
      </div>
      <div className="triangulo">
        <img src={triangulo} alt="" />
      </div>
    </div>
  )
}
