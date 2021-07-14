import React from 'react'
import { MainGrid } from '../src/styles/MainGrid'
import { Box } from '../src/styles/Box'
import { ProfileRelationsBoxWrapper } from '../src/styles/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import useRequestData from '../src/hooks/useRequestData'
import ProfileSideBar from '../src/components/ProfileSideBar'
import WelcomeAreaForm from '../src/components/WelcomeAreaForm'

// function ProfileRelationsBox(props) {
//   return (

//   )
// }

export default function Home() {
  const githubUser = 'adryanefernandes'

  //Api
  const userData = useRequestData([], `/users/${githubUser}`)
  const followers = useRequestData([], `/users/${githubUser}/followers`)
  const following = useRequestData([], `/users/${githubUser}/following?per_page=6`)


  //Form
  const [community, setCommunity] = useState([{
    id: '1',
    titulo: 'Eu odeio acordar cedo',
    image: 'https://th.bing.com/th/id/OIP.MloV5FpEwDPQ7J_bTG6x1AHaFD?pid=ImgDet&rs=1'
  }])


  const initialState = {
    title: "",
    image: ""
  }
  const [form, handleForm, resetForm] = useForm(initialState)

  function handleCreateCommunity(e) {
    e.preventDefault();
    // const formData = new FormData(e.target)

    // const novaComunidade = {
    //   id: new Date().toISOString(),
    //   titulo: dadosDoForm.get('title'),
    //   image: dadosDoForm.get("image")
    // }

    setComunidades([...comunidades, form])
  }


  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
            
           <Box>
            <h1 className="title">
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target)

              const novaComunidade = {
                id: new Date().toISOString(),
                titulo: dadosDoForm.get('title'),
                image: dadosDoForm.get("image")
              }

              setComunidades([...comunidades, novaComunidade])
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URl para colocarmos de capa"
                  name="image"
                  arial-label="Coloque uma URl para colocarmos de capa"
                  type="text"
                />
              </div>

              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box> 
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>

          <ProfileRelationsBoxWrapper >
            <h2 className={"smallTitle"}>
              Seguidores ({userData && userData.followers})
            </h2>


            <ul>
              {followers && followers.map((follower) => {
                return (
                  <li key={follower.id}>
                    <a href={`https://github.com/${follower.login}`} >
                      <img src={`https://github.com/${follower.login}.png`} />
                      <span>{follower.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper >
            <h2 className={"smallTitle"}>
              Comunidades ({comunidades.length})
            </h2>


            <ul>
              {comunidades.map((comunidade) => {
                return (
                  <li key={comunidade.id}>
                    <a href={`/users/${comunidade.title}`} >
                      <img src={comunidade.image} />
                      <span>{comunidade.titulo}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className={"smallTitle"}>
              Pessoas da comunidade ({userData && userData.following})
            </h2>


            <ul>
              {following && following.map((followed) => {
                return (
                  <li key={followed.id}>
                    <a href={`https://github.com/${followed.login}`} >
                      <img src={`https://github.com/${followed.login}.png`} />
                      <span>{followed.login}</span>
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
