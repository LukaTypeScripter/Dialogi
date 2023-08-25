import styled from "styled-components";
import { Purple, white, headerCoolBlack } from "../../../styled";
import Button from "../../Button/Button";

export const ContactBtn = styled(Button)`
  background-color: ${Purple};
  color: white;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-left: 26px;
`
export const PsycologyBtn = styled(Button)`
padding: 15px 24px 15px 24px;
background-color:#5C22AD1A;
font-size: 16px;
font-weight: 400;
line-height: 28px;
word-wrap: break-word;
border:none;
outline: none;
border-radius: 10px;
`
export const NavCont = styled.nav`
  width: 100%;
  padding: 40px 29px 41px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${white};
  img {
    width: 161px;
    height: 22px;
  }
  .links__cont {
    display: flex;
    gap: 30px;
    align-items: center;
    a {
      color: ${headerCoolBlack};
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
      word-wrap: break-word;
    }
  }

  .left__side {
    display: flex;
    .left__side__contact {
      display: flex;
      column-gap: 24px;
      justify-content: center;
     .contact__us {
        color: ${headerCoolBlack};
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        text-decoration: underline;
        line-height: 20px;
        word-wrap: break-word;
        text-align: center;
      }
       .login {
        color: ${headerCoolBlack};
      margin-left: 3.125rem;
      margin-right: 26px;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      line-height: 24px;
      word-wrap: break-word;
      margin-top: 16px;
      text-decoration: none;
    }
      .contact {
        display:flex;
        flex-direction: column;
        justify-content: center;
     
      }
   
      p {
        color: ${headerCoolBlack};
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        line-height: 24px;
        word-wrap: break-word;
      }
    }

  }

    @media only screen and (max-width: 90rem) {
      .links__cont {
        gap: 19.8px;
      }
  }
`;