import React, { Component } from 'react'
import Bio from './bio'
import Detail from './detail'
import { Container } from './style'

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Bio />
        <Detail />
      </Container>
    )
  }
}