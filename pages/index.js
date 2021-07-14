import { useState } from 'react'
import useForm from '../src/hooks/useForm'
import useRequestData from '../src/hooks/useRequestData'
import ProfileSideBar from '../src/components/ProfileSideBar'
import WelcomeAreaForm from '../src/components/WelcomeAreaForm'
import ProfileRelationsBox from '../src/components/ProfileRelationsBox'

import { MainGrid } from '../src/styles/MainGrid'
import { Box } from '../src/styles/Box'
import { ProfileRelationsBoxWrapper } from '../src/styles/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'


export default function Home() {
  const githubUser = 'adryanefernandes'

  //Api
  const userData = useRequestData([], `/users/${githubUser}`)
  const followers = useRequestData([], `/users/${githubUser}/followers`)
  const following = useRequestData([], `/users/${githubUser}/following?per_page=6`)

  const followersData = {
    id: followers.id,
    title: followers.login,
    image: `https://github.com/${followers.login}.png`
  }
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
          <ProfileRelationsBox
            title={"Seguidores"}
            list={followers}
            categoryQuantity={userData.followers}
          />

          <ProfileRelationsBox
            title={"Comunidades"}
            list={communities}
            categoryQuantity={communities.length}
          />

          <ProfileRelationsBox
            title={"Pessoas da comunidade"}
            list={following}
            categoryQuantity={userData.following}
          />
        </div>
      </MainGrid >
    </>
  )
}
