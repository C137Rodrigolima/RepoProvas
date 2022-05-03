import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  width: 464px;
  height: 56px;
  padding-left: 5px;
  background: #ffffff;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  border: solid 1px #C4C4C4;
  box-sizing: border-box;

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: left;
    color: #9f9f9f;
  }
`
const Button = styled.button`
  all: unset;
  width: 88px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: ${({path})=> path? "#ffffff" : "#1976D2"};

  background: ${({path})=> path? "#1976D2" : "#ffffff"};

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const NavBox = styled.div`
  width: 700px;
  padding-bottom: 34px;

  display: flex;
  justify-content: space-between;

  h1{
    width: 464px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.15px;

    color: rgba(0, 0, 0, 0.8);
  }
`

export { 
  Container,
  NavBox,
  Input,
  Button
};