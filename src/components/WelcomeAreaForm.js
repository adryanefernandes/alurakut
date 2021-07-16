import { Box } from '../styles/Box'

function WelcomeAreaForm(props) {
  return <>
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
      <form onSubmit={props.handleForm}>
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            arial-label="Qual vai ser o nome da sua comunidade?"
            name="title"
            type="text"
            value={props.form.title}
            onChange={props.handleInput}
          />
        </div>
        <div>
          <input
            placeholder="Coloque uma URl para colocarmos de capa"
            arial-label="Coloque uma URl para colocarmos de capa"
            name="image"
            type="text"
            value={props.form.image}
            onChange={props.handleInput}
          />
        </div>

        <button type="submit">
          Criar comunidade
        </button>
      </form>
    </Box>
  </>
}

export default WelcomeAreaForm