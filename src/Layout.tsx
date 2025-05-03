import React from 'react'
import Footer from './components/footer/footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import HeaderLogin from './components/header/headerLogin'

const Layout = () => {
  return (
    <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center vh-100"
        >
      <Header/>
      <Outlet/>
      <Footer/>
    </Container>
  )
}

export default Layout