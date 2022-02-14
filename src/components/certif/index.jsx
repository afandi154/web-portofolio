import React, { Component } from 'react'
import { Certif, Container, Grid } from './style'
import Certif01 from '../image/Certificate_01.png';
import Certif02 from '../image/Certificate_02.png';
import Certif03 from '../image/Certificate_03.png';
import Certif04 from '../image/Certificate_04.png';
import Certif05 from '../image/Certificate_05.png';
import Certif06 from '../image/Certificate_06.png';
import Certif07 from '../image/Certificate_07.png';
import Certif08 from '../image/Certificate_08.png';

export default class Certificate extends Component {
  
  render() {
    return (
      <Container>
        <h2>Digital Certificate</h2>
        <Grid>
          <div>
            <a href="https://www.dicoding.com/certificates/N9ZODVR1RPG5" terget="_blank">
              <Certif src={Certif02} alt="Certificate 02" />
            </a>
          </div>
          <div>
            <a href="https://www.dicoding.com/certificates/0LZ03O430Z65" terget="_blank">
              <Certif src={Certif03} alt="Certificate 03" />
            </a>
          </div>
          <div>
            <a href="https://www.dicoding.com/certificates/2VX3NERRNXYQ" terget="_blank">
              <Certif src={Certif04} alt="Certificate 04" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1yu0rrcGQoO6D9159aTt3Vu-2b_lHg2TX/view?usp=sharing" terget="_blank">
              <Certif src={Certif05} alt="Certificate 05" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1V7L2UiK6ALmTMOXb-PlOu7SlZ7bgEZkD/view?usp=sharing" terget="_blank">
              <Certif src={Certif06} alt="Certificate 06" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1jNVvUsgZKYHWmhaJQWKNEYuRRDB_FGtZ/view?usp=sharing" terget="_blank">
              <Certif src={Certif07} alt="Certificate 07" />
            </a>
          </div>
          <div>
            <a href="http://https://www.freecodecamp.org/certification/m_afandi/responsive-web-design" terget="_blank">
              <Certif src={Certif01} alt="Certificate 01" />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/19UEUJcdYl5FADGCfbPBBpodGod6ltnHI/view?usp=sharing" terget="_blank">
              <Certif src={Certif08} alt="Certificate 08" />
            </a>
          </div>
        </Grid>
      </Container>
    )
  }
}