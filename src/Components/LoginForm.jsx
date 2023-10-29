import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // const handleLogin = () => {
  //   if (email === 'example@email.com' && password === 'password123') {
  //     alert('Вход выполнен успешно');
  //   } 
  //   else {
  //     alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
  //   }
  // };

  const handleRegister = () => {
    if (email && password) {
      alert('Регистрация выполнена успешно');
    } 
    else {
      alert('Ошибка регистрации. Пожалуйста, заполните все поля.');
    }
  };

  return (
    <div>
      <h2>Login or Register</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default LoginForm;