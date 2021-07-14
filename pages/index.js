import { useState } from 'react'
import useForm from '../src/hooks/useForm'

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
  const [communities, setCommunities] = useState([{
    id: '1',
    title: 'Eu odeio acordar cedo',
    image: 'https://th.bing.com/th/id/OIP.MloV5FpEwDPQ7J_bTG6x1AHaFD?pid=ImgDet&rs=1'
  }])


  const initialState = {
    title: "",
    image: ""
  }
  const [form, handleInput, resetForm] = useForm(initialState)

  function handleCreateCommunity(e) {
    e.preventDefault();

    const newCommunity = {
      id: new Date().toISOString(),
      title: form.title,
      image: form.image
    }

    setCommunities([...communities, newCommunity])
    resetForm()
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
          <WelcomeAreaForm
            form={form}
            handleInput={handleInput}
            handleForm={handleCreateCommunity}
          />
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
              Comunidades ({communities.length})
            </h2>


            <ul>
              {communities.map((community) => {
                return (
                  <li key={community.id}>
                    <a href={`/users/${community.title}`} >
                      <img src={community.image} />
                      <span>{community.title}</span>
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
