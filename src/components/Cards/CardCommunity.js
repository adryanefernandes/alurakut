export function CardCommunity(props) {
  return (
    <li key={props.id}>
    <a href={`/communities/${props.id}`} >
      <img src={props.image} />
      <span>{props.title}</span>
    </a>
  </li>
  )
}