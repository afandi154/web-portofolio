import React, { Component } from 'react'
import { WordContainer } from '../main/style'
import { Container, Link, Timeline } from './styled'

export class Experience extends Component {
  render() {
    return (
      <Container>
        <h2>Experience</h2>

        <WordContainer>
          <ul style={{ paddingLeft: '1em' }}>
            <li>
              <h4 style={{ margin: '0' }}>
                Junior Web Developer (Internship) at <span style={{ color: 'lightseagreen' }}>HUMAS Bekasi</span>
              </h4>
              <Timeline>March 2020 - September 2020</Timeline>
              <p style={{ marginTop: '1em', marginBottom: '0' }}>
                Membuat aplikasi web untuk membantu proses e-klipping berita dari media cetak menjadi media digital. Menggunakan php - mysql pada backend dan bootstrap pada frontend.
              </p>
              <p style={{ marginTop: '5px', marginBottom: '1em' }}>
                Link Project : <Link href="https://github.com/afandi154/e-klipping-2020">Github</Link>
              </p>
            </li>
            <li>
              <h4 style={{ margin: '0' }}>
                Fullstack Web (Beasiswa) at <span style={{ color: 'lightseagreen' }}>Digitalent Diskominfo</span>
              </h4>
              <Timeline>March 2021 - July 2021</Timeline>
              <p style={{ marginTop: '1em', marginBottom: '0' }}>
                Membuat aplikasi web berupa sistem pendaftaran peserta didik baru (PPDB). Menggunakan php - mysql pada backend dan bootstrap pada frontend.
              </p>
              <p style={{ marginTop: '5px', marginBottom: '1em' }}>
                Link Project : <Link href="https://github.com/afandi154/ppdb-digitalent-2021">Github</Link>
              </p>
            </li>
            <li>
              <h4 style={{ margin: '0' }}>
                Fullstack Web (Internship) at <span style={{ color: 'lightseagreen' }}>Eduwork Indonesia</span>
              </h4>
              <Timeline>January 2022 - March 2022</Timeline>
              <p style={{ marginTop: '1em', marginBottom: '0' }}>
                Membuat aplikasi web berupa sistem Rest API POS (Point Of Sales). Menggunakan NodeJS dan ExpressJS pada backend, serta mongoDB sebagai databasenya.
              </p>
              <p style={{ marginTop: '5px', marginBottom: '1em' }}>
                Link Project : <Link href="https://github.com/afandi154/eduwork-pos-server">Github</Link>
              </p>
            </li>
          </ul>
        </WordContainer>
      </Container>
    )
  }
}

export default Experience