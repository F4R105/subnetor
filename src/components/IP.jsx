import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function IP({network}) {
  const navigate = useNavigate()
  return (
    <Ip onClick={()=>navigate(`/subnet`,{state: network})}>
        <p>{network.network_ip}</p>
        <div><>&#8594;</></div>
    </Ip>
  )
}

const Ip = styled.div`
    background-color: #494949;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2em 1em;
    width: 100%;
    max-width: 500px;
    margin-bottom: 1em;
    cursor: pointer;

    &:hover { outline: 2px solid #008080ff}
    & p { font-size: 1.5rem;}
`

export default IP