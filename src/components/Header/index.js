import React from 'react'
import logo from '~/assets/Nubank_Logo.png'
import {Container, Top, Logo, Title} from './styles'
export default function Header(){
    return (
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>Ana</Title>
            </Top>
        </Container>
    )
}