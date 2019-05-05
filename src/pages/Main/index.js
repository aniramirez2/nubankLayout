import React, {Component} from 'react';
import {
   Container, Content, Card, CardHeader,
   CardContent, CardFooter, Annotation, 
   Title, Description
  } from   './styles'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Main() {

  
    return (
      <Container>
        <Header></Header>
        <Content>
          <Menu></Menu>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666"></Icon>
              <Icon name="visibility-off" size={28} color="#666"></Icon>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 15.632,58</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transderencia de Ifood de R$ 58,36 recebido hoje ás 14:25h
              </Annotation>
            </CardFooter>
          </Card>
        </Content>
        <Tabs/>
      </Container>
    )
    
  
}
