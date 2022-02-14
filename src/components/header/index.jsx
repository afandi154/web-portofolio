import React, { Component } from 'react'
import { Container } from './style'
import Profile from './profile'
import Title from './title'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title />
        <Profile />
      </Container>
    )
  }
}