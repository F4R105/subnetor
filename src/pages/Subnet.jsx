import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalContext } from '../Contexts.jsx'

// GLOBAL STYLES
import { Container, Section } from '../styled/globals.jsx'

function Subnet() {
  const navigate = useNavigate()
  const { results } = useContext(GlobalContext)
  const { state } = useLocation()
  const {network_ip, broadcast_ip, usable_hosts, default_gateway} = state

  return (
    <Section>
      <Container style={{paddingTop: "4em"}}>
        <Title>
          <div>{network_ip}</div>
          <p>Subnet IP</p>
        </Title>
        <SubnetInfo>
          <div>CIDR Notation: </div>
          <span>{`${network_ip}/${results.cidr}`}</span>
        </SubnetInfo>
        <SubnetInfo>
          <div>Subnet Mask: </div>
          <span>{`255.255.255.${results.binary}`}</span>
        </SubnetInfo>
        <SubnetInfo>
          <div>Default gateway: </div>
          <span>{default_gateway}</span>
        </SubnetInfo>
        <SubnetInfo>
          <div>Broadcast IP: </div>
          <span>{broadcast_ip}</span>
        </SubnetInfo>
        <SubnetInfo>
          <div>Host IP's: </div>
          <span>{usable_hosts}</span>
        </SubnetInfo>
        <Button onClick={()=>navigate(-1)}>
          <span><>&#8592;</></span>
          <span>Back</span>
        </Button>
      </Container>
    </Section>
  )
}

const Title = styled.div`
  & > div { font-size: 3rem}
  & > p { font-weight: bold; border-bottom: 2px solid grey; font-style: italic}
`

const SubnetInfo = styled.div`
  display: flex;
  gap: 1em;
  font-size: 1.2rem;
  padding: 0.5em 0;

  & > div { font-weight: bold}
`

const Button = styled.button`
  display: block;
  margin-top: 2em;
  background-color: #494949;
  color: white;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  width: 130px;
`

export default Subnet