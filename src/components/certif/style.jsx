import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2em 0;
  
`
export const Grid = styled.div`
  text-align: center;
  display: grid;
  padding-top: 1em;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width: 1300px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 1020px){
    grid-template-columns: 1fr;
    grid-gap: 2em 0;
  }
`;

export const Certif = styled.img`
  width: 21em;

  @media(max-width: 1300px){
    width: 25em;
  }
  @media(max-width: 1020px){
    width: 80%;
  }
  @media(max-width: 750px){
    width: 100%;
  }
`