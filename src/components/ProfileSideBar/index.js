import { Box } from '../../styles/Box'
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons'


function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} alt={"avatar image"} style={{ borderRadius: "8px" }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default ProfileSideBar