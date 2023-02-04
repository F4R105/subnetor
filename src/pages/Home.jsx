import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Contexts.jsx'
import calculateSubnets from '../calculations'

// GLOBAL STYLES
import { Container, Section } from '../styled/globals.jsx'

// COMPONENTS
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Home() {

  const navigate = useNavigate()
  const { ip, mask, subnets, setIp, setMask, setSubnets, setResults } = useContext(GlobalContext)

  const findNetworks = () => {
    // VALIDATE INPUTS
    if(!ip.includes('.') || ip.split('.').length !== 4) return alert('invalid ip address')

    // SPLIT USER INPUT ADDRESS
    const lastOctateBinary = ip.split('.')[3]
    const networkOctatesBinary = ip.split('.').splice(0,3).join('.')

    // CALCULATE CIDR,NETWORKS AND HOSTS
    const results = calculateSubnets(subnets)

    // CALCULATE IP ADDRESSES
    for(let i = parseInt(lastOctateBinary); i < (results.hosts * results.noOfNetworks); i += results.hosts){
      const network = { 
        network_ip: `${networkOctatesBinary}.${i}`,
        usable_hosts: `${networkOctatesBinary}.${i+1} - ${networkOctatesBinary}.${i + (results.hosts - 2)}`,
        broadcast_ip: `${networkOctatesBinary}.${i + (results.hosts-1)}`,
        default_gateway: `${networkOctatesBinary}.${i+1}`
      }
      results.networks.push(network)
    }

    // RESET INPUTS
    setIp('')
    setMask('')
    // setSubnets('')

    // SAVE CALCULATION RESULTS
    setResults(results)

    // NAVIGATE
    navigate('./subnets')
  }


  return (
    <Section>
      <Container>
        <Input type="text" label="Class C IP Address" value={ip} fx={setIp}></Input>
        <Input type="text" label="Subnet Mask" value={mask} fx={setMask}></Input>
        <Input type="number" label="No of subnets required" value={subnets} fx={setSubnets}></Input>
        <Button label="Create subnets" fx={findNetworks}></Button>
      </Container>
    </Section>
  )
}

export default Home