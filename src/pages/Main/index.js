import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Container} from   './styles'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
export default function Main() {

  
    return (
      <Container>
        <Header></Header>
        <Tabs/>
      </Container>
    )
    
  
}
