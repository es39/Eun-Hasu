import React from 'react'
import styled from 'styled-components'
import { es_data } from '../Data/MyData'

const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: relative;
        z-index: -1;
    }
`
const IntroduceBox = styled.div`
    width: 80%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MyimgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 40vh;
    > img {
        width: 20vw;
        height: 28vh;
    }
`
const EsInfo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`
const MyInfo = styled.section`
    font-size: 1.3em;
    > div {
        margin: 5px;
        margin-left: 20px;
    }
`


export default function Main() {
    return (
            <MainSection>
                <IntroduceBox>
                    {es_data.map(data => {
                        return (
                            <main>
                                <EsInfo>
                                    <MyimgWrapper>
                                        <img src='eunseon.png' alt="은선 미모티콘"/>
                                    </MyimgWrapper>
                                    <MyInfo>
                                        <div className='myname'>Name: {data.name}</div>
                                        <div className='school'>Highest Level of Education: {data.school}</div>
                                        <div className='mbti'>MBTI: {data.mbti}</div>
                                    </MyInfo>
                                </EsInfo>
                                <MyInfo>
                                    <div className='github'>Git: {data.github}</div>
                                    <div className='insta'>SNS: {data.insta}</div>
                                </MyInfo>
                            </main>
                        )
                    })}
                </IntroduceBox>
                <img src='eunhasu1.jpg' alt="은하수배경"/>
        </MainSection>
    )
}