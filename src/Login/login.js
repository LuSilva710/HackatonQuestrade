import React, { useState } from 'react';
import Form from "../components/Form";
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import { Title } from './styles';
import { FaUser  } from "react-icons/fa";
import '../teste.css';

function LoginForm () {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Simulação de autenticação assíncrona
    setTimeout(() => {
      // Verifica se o login e a senha estão corretos
      if (username === 'admin' && password === 'admin') {
        setLoggedIn(true);
      } else {
        alert('Login ou senha incorretos');
        
      }
    }, 1000);
  };

  if (loggedIn) {
    return <div >
    <Title  style={{
            color: '#fff',
            padding: '25px',
            fontSize: '20px',
  
          }}> <FaUser  className="iconUser"/> Bem-Vindo, {username} </Title>
    <Header />
    <Form/>
    <GlobalStyle/>
    </div>;
    
  }

  return (
    
    <form onSubmit={handleFormSubmit} className="loginForm">
      <label>
        Usuário:
        <input type="text" value={username} onChange={handleUsernameChange} className="loginFormUsuario" />
      </label>
      <br />
      <label>
        Senha:  
        <input type="password" value={password} onChange={handlePasswordChange}  className="loginFormSenha" />
      </label>
      <br />
      <button type="submit" className="loginFormBotao">Entrar</button>
    </form>
  );
}



export default LoginForm;