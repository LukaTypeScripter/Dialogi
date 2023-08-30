import styled from "styled-components";
import { headerCoolBlack } from "../../../styled";


export const TeamContainer = styled.div`
   width: 100%;
  .my__team {
    padding: 165px 247px 80px;
    .my__team__title,
    .my__Team__subtitle {
      text-align: center;
    }
    .my__team__title {
      color: ${headerCoolBlack};
      font-size: 56px;
      font-family: FiraGO;
      font-weight: 500;
      line-height: 64px;
      word-wrap: break-word;
    }
    .my__Team__subtitle {
      color: #938fa9;
      font-size: 20px;
      font-family: FiraGO;
      font-weight: 400;
      line-height: 30px;
      word-wrap: break-word;
      margin-top: 30px;
    }
  }
  .relative {
    position: relative;
    margin-bottom: 160px;
  }
  .cards__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap:30px;
    margin-top: 5rem;
    .blur__bg {
      position: absolute;
      left: 7%;
      right: 0;
      bottom: 0;
      top: 70%;
      background: rgba(185, 179, 217, 0.42);
      border-radius: 27px;
      backdrop-filter: blur(26px);
      width: 382px;
      height: 260px;
      .blur__title {
        color: #032d60;
        font-size: 24px;
        font-family: FiraGO;
        font-weight: 500;
        line-height: 21px;
        word-wrap: break-word;
        margin-top: 35px;
      }
      .blur__subtitle {
        color: white;
        font-size: 18px;
        font-family: FiraGO;
        font-weight: 400;
        line-height: 21px;
        word-wrap: break-word;
        margin-top: 20px;
      }
      .blur__subtitle,
      .blur__title {
        text-align: center;
      }
    }
    .blur__btn_wrapper {
      position: absolute;
      left: -35%;
      top: 65%;
      bottom: 0;
    }
  }

  .services {
    margin-top: 5rem;
  }
  .services__title ,  .services__subtitle {
    text-align: center;
  }
  .services__title {
    color: ${headerCoolBlack};
    font-size: 56px;
font-family: FiraGO;
font-weight: 500;
line-height: 64px;
word-wrap: break-word
  }
  .services__subtitle {
    color: #938FA9;
font-size: 20px;
font-family: FiraGO;
font-weight: 400;
line-height: 30px;
word-wrap: break-word;
width: 1429px;
margin-left: 247px;
margin-top: 30px;
  } 
  .btn__wrapper {
    margin-left: 45%;
    margin-top: 30px;
  }
  .slider__cards__wrapper {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 200px;
    margin-top: 105px;
    margin: 105px 200px 169px;
  }
  

  .rigth__cheveron__cont,  .left__cheveron__cont {
    border-radius: 10px; 
    border: 0.50px #032D60 solid; 
    backdrop-filter: blur(4px);
    img {
        padding: 15px 14px 15px 16px;
    }
  }
  @media only screen and (max-width: 90rem) {

    .team__img {
      width: 378px !important;
    }
    .my__team {
      padding:100px 80px;
    }
    .blur__bg {
      width: 338px !important;
    }
    .slider__cards__wrapper {
      padding: 80px 10px 146px 40px !important;
      margin: 0 !important;
      gap: 19px;
    }
    .services__subtitle {
      margin-left: 0;
    padding-left: 40px;
    padding-right: 40px;
    width: 1360px;
    }

  }
  @media only screen and (max-width: 43.3rem) {
    .blur__btn_wrapper {
left: -10% !important;
top: 65%;
bottom: 0px;
}
.my__team {
  padding: 40px 25px 0 !important;
}
.services__title,.my__team__title {
font-size: 32px !important;
line-height: 64px !important;
}
.services__subtitle,.my__Team__subtitle  {
font-size: 16px !important;
line-height: 30px !important;
width: auto;
}
.btn__wrapper {
  margin-left: 30%;
}
  }

`;