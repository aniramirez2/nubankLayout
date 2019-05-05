import React from 'react'
import {Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import QRcode from 'react-native-qrcode'
export default function Menu(){
    return (
        <Container>
            <Code>
                <QRcode
                value="https://www.linkedin.com/in/anaramireza/"
                size={80}
                fgColor="#fff"
                bgColor="#8B10AE">
                </QRcode>                
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"></Icon>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"></Icon>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"></Icon>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SingOutButton onPress={()=>{}}>
                <SingOutButtonText>SAIR DO APP</SingOutButtonText>
            </SingOutButton>
        </Container>
    )
}