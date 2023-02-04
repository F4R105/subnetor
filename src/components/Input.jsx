import React from 'react'
import styled from 'styled-components'

function Input({type, label, value, fx}) {
  return (
    <InputContainer>
        <label htmlFor={label}>{label}</label>
        <input type={type} id={label} name={label} value={value} onChange={(e)=>fx(e.target.value)}/>
    </InputContainer>
  )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin-bottom: 1em;

    & label {
        font-size: 0.8rem;
    }

    & input {
        font-size: 1.8rem;
        background-color: #494949;
        border: none;
        padding: 0.5em;
        border-radius: 5px;
        color: white;

        &:focus {outline: 2px solid #008080ff}
    }
`

export default Input