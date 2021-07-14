import { ProfileRelationsBoxWrapper } from '../styles/ProfileRelations'
import { CardProfile } from './Cards/CardProfile'
import { CardCommunity } from './Cards/CardCommunity'

function ProfileRelationsBox(props) {
  const relationsList = props.list.map((item) => {
    if (["Seguidores", "Pessoas da comunidade"].includes(props.title)) {
      return <CardProfile
        id={item.id}
        login={item.login}
      />
    } else {
      return <CardCommunity
        id={item.id}
        image={item.image}
        title={item.title}
      />
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