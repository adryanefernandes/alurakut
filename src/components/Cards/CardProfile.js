export function CardProfile(props) {
  return (
    <li key={props.id}>
      <a href={`https://github.com/${props.login}`} >
        <img src={`https://github.com/${props.login}.png`} />
        <span>{props.login}</span>
      </a>
    </li>
  )
}
