import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSideBar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`} alt={"avatar image"} style={{ borderRadius: "8px" }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'adryanefernandes'
  const pessoasFavoritas = ["rafaballerini", "marcobrunodev", "juunegreiros", "omariosouto", 'peas', 'felipefialho']

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box >
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper >
            <h2 className={"smallTitle"}>
              Comunidades ({pessoasFavoritas.length})
            </h2>


            <ul>
              {pessoasFavoritas.map((user) => {
                return (
                  <li>
                    <a href={`/users/${user}`} key={user}>
                      <img src={`https://github.com/${user}.png`} />
                      <span>{user}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid >
    </>
  )
}
