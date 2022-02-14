import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 3em auto 2em auto;

  @media(max-width: 930px){
    display: block;
  }
`;

export const ContainerBio = styled.div`
  width: 70%;

  @media(max-width: 930px){
    width: 100%;
  }
`
export const ContainerDetail = styled.div`
  background-color: #101010;
  width: 30%;
  margin-left: 2em;
  padding: 0.5em 2em;
  border: 2px solid white;
  border-radius: 5px;

  @media(max-width: 1125px){
    width: 50%;
  }
  @media(max-width: 930px){
    display: none;
  }
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.8em;
`

export const WordContainer = styled.div`
  font-size: 18px;

  @media(max-width: 1125px){
    font-size: 16px;
  }
`
export const WrapList = styled.div`
  margin-right: 4em;

  @media(max-width: 930px){
    margin-right: 0;
  }
`