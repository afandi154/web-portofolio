import React, { Component } from 'react'
import { WordContainer } from '../main/style'

export default class AltSkill extends Component {
  render() {
    return (
      <div>
        <h2>Other Skills</h2>
        <WordContainer>
        <ul style={{paddingLeft: '1em'}}>
          <li>Art / Drawing (Beginner)</li>
          <li>Color Theory (Beginner)</li>
          <li>Data Structure (Beginner)</li>
          <li>Electrical Engineering (Beginner)</li>
          <li>English Language (Intermidiate)</li>
          <li>Japanese Language (Beginner)</li>
        </ul>
        </WordContainer>
      </div>
    )
  }
}