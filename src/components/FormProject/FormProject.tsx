import { InputProject } from '../../@types/types'
import './FormProject.css'

type FormProjectProps = {
  InputProjects: InputProject[]
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function FormProject({
  InputProjects,
  onChange,
  onSubmit,
}: FormProjectProps) {
  return (
    <form onSubmit={onSubmit}>
      {InputProjects.map((InputProject) => (
        <div key={InputProject.id} className="input__group">
          <label htmlFor={InputProject.id}>{InputProject.label}</label>
          <div className="input__container">
            <span>{InputProject.inputInfo}</span>
            <input
              type="text"
              id={InputProject.id}
              name={InputProject.id}
              onChange={onChange}
            />
          </div>
        </div>
      ))}
      <button type="submit">Calculate</button>
    </form>
  )
}
