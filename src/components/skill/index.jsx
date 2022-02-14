import React, { Component } from 'react'
import AltSkill from './altSkill'
import MainSkill from './mainSkill'
import { Container } from '../main/style'

export default class Skill extends Component {
  render() {
    return (
      <Container>
        <MainSkill />
        <AltSkill />
      </Container>
    )
  }
}