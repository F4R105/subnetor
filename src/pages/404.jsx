import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// GLOBAL STYLES
import { Section, Container } from '../styled/globals.jsx'

function NotFound() {
  return (
    <Section>
      <Container>
          <h1>Page Not Found</h1>
          <Link to='/'>Return Home</Link>
      </Container>
    </Section>
  )
}

export default NotFound