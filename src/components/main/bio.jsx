import React, { Component } from 'react'
import { ContainerBio, WordContainer } from './style'

export default class Bio extends Component {
  render() {
    return (
      <ContainerBio>
        <h2>Biography</h2>
        <WordContainer>
          <p>
            Hello, my name is Mahfudh Afandi. I'm a Junior Web Developer from Indonesia, that like to learn pretty much anything about the computer itself. My dream is to be able to work as a Software Engineer and develope a new technology in the future. I also intrested on learning about Artificial Intelligence, Machine Learning, Cyber Security, and IOT.
          </p>
        </WordContainer>
        <WordContainer>
          <p>
            I'm currently focused on learning Web Development and have a good understanding about Web Architecture, Deploying a good User Interface, User Experience, and Responive Website. I also have an experience for using many Programming Languages when creating Desktop Application such as Java, C, C++, and Python.
          </p>
        </WordContainer>
      </ContainerBio>
    )
  }
}