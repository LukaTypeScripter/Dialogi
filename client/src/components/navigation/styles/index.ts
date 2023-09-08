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

  .mobile__wrapper {
    display: flex;
    gap: 85px;
  }

  .mobile__nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%; 
    height: 100%; 
    background: rgba(184.65, 178.82, 216.75, 0.50); 
    backdrop-filter: blur(8px);
  }
  .nav__cont {
    height: 100%;
    background-color: white;
    width: 309px;
    padding: 20px 30px;
    overflow-y: scroll;
  }
  .nav__header {
    display: flex;
    gap: 39px;
  }
  .links__Wrapper {
    display: flex;
    flex-direction: column;
    gap: 27px;
    margin-top: 33px;
    a {
      color: rgb(3, 45, 96);
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    overflow-wrap: break-word;
    }
  }
  .lengueges {
    margin-top: 150%;
    background-color: #7024C41C;
    width: 90px;
    height: 32px;
    border-radius: 5px;
  }
  .lengueges__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 6px;
    padding-right: 6px;
    padding-left: 6px;
    gap: 5px;
  }
  .transform {
    transform: rotate(-0.25turn);
  }
`;