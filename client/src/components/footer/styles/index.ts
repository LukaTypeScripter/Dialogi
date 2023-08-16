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
`;