import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { path } from './utils/constant';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

function App() {

  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    (
     async () => {
      const response = await fetch('http://localhost:8081/api/user', {
        headers: {'Content-Type': 'application/json' },
        credentials: 'include',
      })

      const data = await response.json()
      setFirstName(data.first_name)
     })()
  })

  return (
    <BrowserRouter>
      <Header firstName={firstName} setFirstName={setFirstName} />
      <main>
        <Container>
            <Routes>
              <Route path={path.HOME} element={<HomeScreen firstName={firstName}/>} />
              <Route path={path.SIGNUP} element={<SignupScreen />} />
              <Route path={path.LOGIN} element={<LoginScreen />} />
            </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
