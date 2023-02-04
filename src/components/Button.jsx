import React from 'react'
import styled from 'styled-components'

function Button({label, fx}) {
  return (
    <AppButton onClick={fx}>{label}</AppButton>
  )
}

const AppButton = styled.button`
    background-color: #008080ff;
    font-size: 1.8rem;
    border: none;
    padding: 0.5em;
    border-radius: 5px;
    color: white;
    width: 100%;
    max-width: 500px;
    transition: background-color .2s ease;

    &:hover { background-color: #016464;}
    &:focus { outline: 2px solid white}
`

export default Button