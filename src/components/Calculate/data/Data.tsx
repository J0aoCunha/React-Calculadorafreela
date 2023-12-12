interface dataProps {
  title: string
  descriptionSpan: string
  placeholder: string
}

function Data(props: dataProps) {
  return (
    <div>
      <label>{props.title}</label>
      <div className="data">
        <div className="indicator">
          <span>{props.descriptionSpan}</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default Data
