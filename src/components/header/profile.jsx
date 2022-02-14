import React, { Component } from 'react'
import photo from '../image/profile.jpg'
import fb from '../image/facebook-brands.svg'
import linkedin from '../image/linkedin-brands.svg'
import github from '../image/github-brands.svg'
import mail from '../image/envelope-solid.svg'
import { IconLink, ProfilePhoto } from './style'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfilePhoto src={photo} alt="myPhoto" />
        <div style={{textAlign: 'center'}}>
          <a href="https://www.linkedin.com/in/mahfudh-afandi-994866213/">
            <IconLink src={linkedin} alt="linkedin" />
          </a>
          <a href="https://web.facebook.com/4fandi23/">
            <IconLink src={fb} alt="facebook" />
          </a>
          <a href="https://github.com/afandi154/afandi154">
            <IconLink src={github} alt="github" />
          </a>
          <a href="mailto:mahfudhafand23@gmail.com">
            <IconLink src={mail} alt="github" />
          </a>
        </div>
      </div>
    )
  }
}