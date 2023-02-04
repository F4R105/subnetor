import React, { useContext} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../Contexts.jsx'

// GLOBAL STYLES
import { Container as globalContainer, Section } from '../styled/globals.jsx'

// COMPONENTS
import Ip from '../components/IP.jsx'

function Subnets() {

  const {results, subnets} = useContext(GlobalContext)
  return (
    <Section>
      <Container>
          <InfoContainer>
            <Title>Information</Title>
            <div>
              Number of subnets required: <span>{subnets}</span>
            </div>
            <div>
              Number of subnets calculated: <span>{results.noOfNetworks}</span>
            </div>
            <div>
              Number of hosts per subnet: <span>{results.hosts}</span>
            </div>
            <div>
              Number of usable hosts per subnet: <span>{results.hosts - 2}</span>
            </div>
          </InfoContainer>
          <SubnetsContainer>
            <Title>Subnet IP's</Title>
            {results.networks.map(network=><Ip network={network} key={network.network_ip}></Ip>)}
          </SubnetsContainer>
      </Container>
    </Section>
  )
}

const Container = styled(globalContainer)`
  display: flex;
  gap: 5em;

  @media screen and (max-width: 500px){
    flex-direction: column;
    gap: 1em;
  }
`

const Title = styled.h3`
  color: white;
  font-size: 1.8rem;
`

const InfoContainer = styled.div`
  order: 2;
  flex: 1;

  & > div {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px){
    order: 0;
  }
`

const SubnetsContainer = styled.div`
  order: 1;
  flex: 1;
`

export default Subnets