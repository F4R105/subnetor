import React from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function Layout({ children }) {
  return (
    <>
        <Nav />
        { children }
        <Footer />
    </>
  )
}

export default Layout