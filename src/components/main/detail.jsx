import React, { Component } from 'react'
import { ContainerDetail, List } from './style'

export default class Detail extends Component {
  render() {
    return (
      <ContainerDetail>
        <h2 style={{borderBottom: '2px solid white', paddingBottom: '5px'}}>Profile</h2>
        <List>
          <li><strong>Name :</strong> Mahfudh Afandi</li>
          <li><strong>Gender :</strong> Male</li>
          <li><strong>Birth :</strong> 03 March 98</li>
          <li><strong>Region :</strong> Jakarta Utara, Indonesia</li>
          <li><strong>Email :</strong> mahfudhafand23@gmail.com</li>
          <li><strong>Phone :</strong> +6282114909795</li>
          <li><strong>Hobby :</strong> Reading, Music, Art</li>
        </List>
      </ContainerDetail>
    )
  }
}