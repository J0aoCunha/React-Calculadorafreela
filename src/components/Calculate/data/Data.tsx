import { useState } from 'react'
import './Data.css'

interface dataProps {
  title: string
  descriptionSpan: string
  placeholder: string
}

export function Data(props: dataProps) {
  const [newInput, setInput] = useState('')

  return (
    <div>
      <label>{props.title}</label>
      <div className="data">
        <div className="indicator">
          <span>{props.descriptionSpan}</span>
        </div>
        <input
          type="text"
          value={newInput}
          placeholder={props.placeholder}
          onChange={(event) => {
            setInput(event.target.value)
            console.log(event.target.value)
          }}
        />
      </div>
    </div>
  )
}
