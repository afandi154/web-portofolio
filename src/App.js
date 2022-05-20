import React, { Component } from 'react'
import Content from './components/main'
import Header from './components/header'
import Skill from './components/skill'
import Certificate from './components/certif'
import Experience from './components/exp'

export default class App extends Component {
  footer = {
    padding: '1em',
    marginTop: '1em',
    textAlign: 'center',
    background: 'black'
  }
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <section>
          <Content />
        </section>
        <hr style={{ width: '80%' }} />
        <section>
          <Skill />
        </section>
        <hr style={{ width: '80%' }} />
        <section>
          <Experience />
        </section>
        <hr style={{ width: '80%' }} />
        <section>
          <Certificate />
        </section>
        <section>
          <footer
            style={this.footer}>
            <h1>&copy;Mahfudh Afandi (2022)</h1>
          </footer>
        </section>
      </>
    )
  }
}