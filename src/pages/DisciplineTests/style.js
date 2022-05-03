import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

const NavBox = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Terms = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  
  color: rgba(0, 0, 0, 0.8);
`

export {
  Container,
  NavBox,
  Terms
}