import styled from "styled-components";
import background from '../image/background.jpg'

export const Container = styled.div`
  background: url(${background});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;

  @media(max-width: 700px){
    display: block;
    text-align: center;
  }
`;

export const ProfilePhoto = styled.img`
  width: 15em;
  border: 3px solid white;
  border-radius: 50%;
  margin-bottom: 0.3em;

  @media(max-width: 930px){
    width: 13em;
  }
  @media(max-width: 530px){
    width: 10em;
  }
`;

export const IconLink = styled.img`
  width: 2em;
  margin: 0.5em;
`;

export const TitleH1 = styled.h1`
  font-size: 4.5em;
  text-shadow: 2px 2px black;
  padding-right: 1em;
  margin: 0;

  @media(max-width: 930px){
    font-size: 3em;
  }
  @media(max-width: 700px){
    padding-right: 0;
  }
  @media(max-width: 530px){
    font-size: 2em;
  }
`;

export const DescH2 = styled.h2`
  text-shadow: 2px 2px black;
  margin: 0;

  @media(max-width: 700px){
    padding-bottom: 1em;
  }
  @media(max-width: 530px){
    font-size: 1.2em;
  }
`