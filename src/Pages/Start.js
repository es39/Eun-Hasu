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
    font-size: 10rem;
    color: black;
    cursor: pointer;
    &:hover{
        color: #FFD233;
        filter: drop-shadow(6px 6px 6px #c3c3c3);
        // visibility: hidden;
    }
  }
`

export default function Start() {
    return (
        <IconWrapper>
            <Link to='/main'>
                <div>
                    <i class="fa-solid fa-lightbulb"></i>
                </div>
            </Link>
        </IconWrapper>
    )
}