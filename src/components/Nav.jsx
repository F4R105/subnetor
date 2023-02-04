import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// GLOBAL STYLES
import { Container } from '../styled/globals.jsx'

function Nav() {
  return (
    <Navbar>
        <NavContainer>
            <Link to='/'><div id="logo" style={{color: "white", fontWeight: "Bold", fontSize: 24}}>SUB-NETOR</div></Link>
            <ul style={{ display: "flex", alignItems: "center"}}>
              <li>
                <Link to="./help" style={{padding: "1em"}}>How works ??</Link>
              </li>
            </ul>
        </NavContainer>
    </Navbar>
  )
}

const Navbar = styled.nav`
  background-color: #008080ff;
`

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Nav