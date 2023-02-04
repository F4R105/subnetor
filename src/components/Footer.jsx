import React from 'react'
import styled from 'styled-components'

// GLOBAL STYLES
import { Container} from '../styled/globals.jsx'

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <p>Copyright <>&copy;</> 2023 Faraji Kajubu</p>
      </FooterContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: black;
  height: 50px;
  color: grey;
`

const FooterContainer = styled(Container)`
  display: grid;
  place-items: center;
`

export default Footer