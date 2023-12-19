import './Separator.css'

interface Separatorprops {
  content: string
}

export function Separator(props: Separatorprops) {
  const { content } = props
  return <section className="infobar">{content}</section>
}
