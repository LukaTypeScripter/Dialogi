import styled from "styled-components";
import { bgDarkPurple } from "../../../styled";


export const FooterCont = styled.footer`
  width: 100%;
  background-color: ${bgDarkPurple};
  padding: 29px 70px 40px 80px;
  .header__top {
    display: flex;
    justify-content: space-between;
    .link__wrapper {
      a {
        margin-left: 50px;
        color: white;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        word-wrap: break-word;
      }
    }
  }
  .line {
    width: 100%;
    background-color: white;
    width: 10px;
  }
  hr {
    margin-top: 43px;
    margin-left: 10px;
    outline: none;
    border-radius: 5px;
  }
  .bottom__wrapper {
    margin-top: 29px;
    h1 {
      color: white;
      font-size: 18px;
      font-family: FiraGO;
      font-weight: 700;
      word-wrap: break-word;
    }
    p{
        color: white;
font-size: 14px;
font-family: FiraGO;
font-weight: 400;
line-height: 20px;
word-wrap: break-word

    }
  }
  .contact__info {
    display: flex;
    margin-top: 19px;
    p{
        opacity: 0.80
    }
  }
  .contact__info p:nth-child(2) {
    margin-left: 71px;
  }
  .contact__location {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    opacity: 0.80
  }
  .contact__us__wrapper {
    display: flex;
    justify-content: space-between;
  }
  .new__routes__wrapper{
    display: flex;
    gap: 43px;
    a {
      color: white;
    }
  }
  @media only screen and (max-width: 42.813rem) {
    padding: 40px 40px 30px 40px;
    .header__top {
      flex-direction: column;
    }
    .footer__logo {
      width: 150px;
    }
    .link__wrapper {
      display: flex;
      flex-wrap: wrap;
      column-gap: 40px;
      row-gap: 20px;
      margin: 0;
      margin-top: 40px;
      a {
        margin-left: 0 !important;
      }
    }
    hr {
        margin-left: 0;
        margin-top: 30px !important;
      }
    .contact__info {
      flex-direction: column;
    
      p {
        margin-top: 19px;
      }
    }
    .contact__info p:nth-child(2) {
      margin-left: 0;
    }
  }
`;