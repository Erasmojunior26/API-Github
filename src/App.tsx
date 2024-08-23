import axios from 'axios'
import './App.css'
import { useState } from 'react'

type GithubData = {
  name: string,
  bio: string,
  avatar_url: string
}

function App() {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [avatar_url, setAvatar_url] = useState("")
  const handlePesquisar = () => {
    axios.get<GithubData>(`https://api.github.com/users/${username}`).then(
      (response) =>  
      {
        setName(response.data.name), 
        setBio(response.data.bio), 
        setAvatar_url(response.data.avatar_url)
      })
    
  }

  return (
    <div className="container-geral">
      <div className="container">
        <header className='header-top'>
          Projeto EMIDES3AM | Consumindo API Github
        </header>
        <main>
          <div className="form">
            <h1>Pesquisar Github</h1>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Digite um usuário" />
            <button onClick={handlePesquisar}>Consultar</button>
          </div>

          <div className="conteudo">
              <div>
                <img className='logo' src={avatar_url} alt="" />
                <h1>{name}</h1>
                <p>{bio}</p>
              </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default App
