import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/apiCalls'
import "./login.css"
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch,{username,password})
  }

  return (
    <div className="container">
      <div className="wrapper">
      <h1>Se connecter</h1>

        <input className="username" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className='btn' type="submit">Connexion</button>
      </div>
    </div>
  )
}

export default Login
