import React, { Component } from 'react'
import { WordContainer, WrapList } from '../main/style'

export default class MainSkill extends Component {
  render() {
    return (
      <WrapList>
        <h2>Computer Skills</h2>
        <WordContainer>
          <ul style={{ paddingLeft: '1em' }}>
            <li>A good understanding about how computer works</li>
            <li>Basic maintaning for computer software</li>
            <li>Understanding the basic of Web Design and Responsive Principle</li>
            <li>Understanding the basic of Object Oriented Programming (OOP)</li>
            <li>Understanding the basic of Web Architecture</li>
            <li>Understanding the basic of Database Management System</li>
          </ul>
        </WordContainer>
      </WrapList>
    )
  }
}