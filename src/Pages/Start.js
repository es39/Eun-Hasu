import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    * i  {
    font-size: 20rem;
    color: black;
    cursor: pointer;
  }
`

export default function Start() {
    return (
        <IconWrapper>
            <Link to='/main'><i className="fa-regular fa-lightbulb"></i></Link>
        </IconWrapper>
    )
}