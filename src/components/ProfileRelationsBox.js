import { ProfileRelationsBoxWrapper } from '../styles/ProfileRelations'

function ProfileRelationsBox(props) {
  const relationsList = props.list.map((item) => {
    if (["Seguidores", "Pessoas da comunidade"].includes(props.title)) {
      return (
        <li key={item.id}>
          <a href={`https://github.com/${item.login}`} >
            <img src={`https://github.com/${item.login}.png`} />
            <span>{item.login}</span>
          </a>
        </li>
      )
    } else {
      return (
        <li key={item.id}>
          <a href={`/communities/${item.id}`} >
            <img src={item.image} />
            <span>{item.title}</span>
          </a>
        </li>
      )
    }

  })

  return (
    <ProfileRelationsBoxWrapper >
      <h2 className={"smallTitle"}>
        {props.title} ({props.categoryQuantity})
      </h2>


      <ul>
        {relationsList}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default ProfileRelationsBox