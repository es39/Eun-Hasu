import { getByTitle } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'
import { es_data } from '../Data/MyData'

const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100vw;
    height: 100vh;
    background-size: cover; */
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
    align-items: flex-start;
    > img {
        width: 15vw;
        height: 21vh;
    }
`

const EsInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



export default function Main() {
    return (
            <MainSection>
                <IntroduceBox>
                    {es_data.map(data => {
                        return (
                            <div>
                                <EsInfo>
                                    <MyimgWrapper>
                                        <img src='eunseon.png' alt="은선 미모티콘"/>
                                    </MyimgWrapper>
                                    <section className='myinfo'>
                                        <div className='myname'>Name: {data.name}</div>
                                        <div className='school'>Highest Level of Education: {data.school}</div>
                                        <div className='mbti'>MBTI: {data.mbti}</div>
                                    </section>
                                </EsInfo>
                                <section className='mylink'>
                                    <div className='github'>Git: {data.github}</div>
                                    <div className='insta'>SNS: {data.insta}</div>
                                </section>
                            </div>
                        )
                    })}
                </IntroduceBox>
                <img src='eunhasu1.jpg' alt="은하수배경"/>
        </MainSection>
    )
}