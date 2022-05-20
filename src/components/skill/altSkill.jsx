import React, { Component } from 'react'
import { WordContainer } from '../main/style'

export default class AltSkill extends Component {
  render() {
    return (
      <div>
        <h2>Programming Skills</h2>
        <WordContainer>
          <ul style={{ paddingLeft: '1em' }}>
            <li>HTML & CSS (Intermidiate)</li>
            <li>Javascript (Intermidiate)</li>
            <li>ReactJS (Intermidiate)</li>
            <li>NodeJS (Beginner)</li>
            <li>PHP & MySQL (Beginner)</li>
            <li>ExpressJS & MongoDB (Beginner)</li>
          </ul>
        </WordContainer>
      </div>
    )
  }
}