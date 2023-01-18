import React from 'react'
import styled from 'styled-components'

const BackGround = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover; */
    > img {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
    }
`

export default function Main() {
    return (
        <BackGround>
            <img src='eunhasu1.jpg' alt="은하수배경"/>
        </BackGround>
    )
}