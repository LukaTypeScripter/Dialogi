import styled from "styled-components";
import { bgMoonImage } from "../../../assets";
import Button from "../../../components/Button/Button";
import { DarkOrchidPurple, headerCoolBlack, subTextGray, bgLavender, white } from "../../../styled";


export const ServicesBtn = styled(Button)`
  padding: 17px 37px 18px 35.84px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
  border-radius: 7px;
  border: none;
  outline: none;
  background-color: ${DarkOrchidPurple};
`;

export const ContactBtn = styled(Button)`
  padding: 17px 38px 18px 37.81px;
  border: 1px ${DarkOrchidPurple} solid;
  background-color: transparent;
  margin-left: 59.84px;
  border-radius: 7px;
  color: ${DarkOrchidPurple};
  font-size: 16px;
  font-family: FiraGO;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;

export const MainContainer = styled.main`
  background-image: url(${bgMoonImage});
  background-repeat: no-repeat;
  background-position: left -7% right 15%;
  width: 100%;
  height: 100%;
  .slogan {
    padding: 8.063rem 15.375rem 4.438rem 15.375rem;
    display: flex;
    .slogan__cont {
      text-align: left;
      margin-left: 87px;
      h1 {
        color: ${headerCoolBlack};
        font-size: 56px;
        font-weight: 500;
        line-height: 64px;
        word-wrap: break-word;
        width: 534px;
      }
      p {
        font-size: 20px;
        font-family: FiraGO;
        font-weight: 400;
        line-height: 30px;
        word-wrap: break-word;
        color: ${subTextGray};
        margin-top: 24px;
      }
      .btn__wrapper {
        display: flex;

        margin-top: 48px;
      }
    }
  }
  .ilustration {
    width: 675px;
    height: 450px;
    margin-left: 87px;
  }
  .about__us {
    display: flex;
    padding-top: 130px;
    padding-right: 160px;

    .photo__slider {
      position: relative;
      display: flex;
      align-items: center;
      padding: 132px 0 132px 0;
      background-color: ${bgLavender};
      border-bottom-right-radius: 40px;
      border-top-right-radius: 40px;
      width: 912px;
      height: 707px;
      .instagram__cont {
        position: absolute;
        left: 21%;
        top: 14%;
        right: 0;
        padding: 21px;
        background-color: rgba(255, 255, 255, 0.53);
        backdrop-filter: blur(4px);
        width: 73px;
        border-radius: 14px;
      }
      .gallery {
        position: absolute;
        left: 73%;
        top: 76%;
        right: 0;
        padding: 21px;
        background-color: rgba(255, 255, 255, 0.53);
        backdrop-filter: blur(4px);
        width: 73px;
        border-radius: 14px;
      }
    }
  }
  .left__cheveron__cont {
    border-radius: 40px;
    img {
      padding: 10px;
      background-color: ${white};
      margin: 0 40px 0 40px;
      border-radius: 10px;
    }
  }
  .rigth__cheveron__cont {
    border-radius: 40px;
    img {
      padding: 10px;
      background-color: ${white};
      border-radius: 10px;
      margin: 0 40px 0 40px;
    }
  }

  .about__us__texts {
    text-align: left;
    padding-left: 87px;
    .text {
      position: relative;
    }
    h1 {
      color: ${headerCoolBlack};
      font-size: 56px;
      font-weight: 500;
      font-family: FiraGO;
      line-height: 64px;
      word-wrap: break-word;
    }
    .about__text {
      color: #181818;
      font-size: 20px;
      font-family: FiraGO;
      font-weight: 400;
      line-height: 30px;
      word-wrap: break-word;
      margin-top: 40px;
    }
    .expend__text {
      color: #938fa9;
      font-size: 20px;
      font-family: FiraGO;
      font-weight: 400;
      line-height: 30px;
      word-wrap: break-word;
      margin-top: 85px;
      margin-left: 80px;
      text-align: left;
    }
    .expend__text::before {
      content: "";
      position: absolute;
      left: -11%;
      top: 6px;
      bottom: 0;
      right: 0;
      margin-left: 87px;
      background-color: #911dc4;
      height: 170px;
      width: 4px;
    }
  }

  .services {
    padding: 130px 246px 0 246px;
    .services__header {
      color: #032d60;
      font-size: 40px;
      font-family: FiraGO;
      font-weight: 500;
      line-height: 52px;
      word-wrap: break-word;
      text-align: center;
    }
    .services__wrapper {
      display: flex;
      align-items:center;
      margin-top: 5rem;
    }
    .left__cheveron__services {
      border: 1px #032D60 solid;
      border-radius: 10px;
      margin-right: 53px;
      height: 54px;
      width: 54px;
      img {
        padding: 15px 14px 15px 16px;
      }
    }
    .rigth__cheveron__services {
      border: 1px #032D60 solid;
      border-radius: 10px;
      margin-left: 53px;
      height: 54px;
      width: 54px;
      img {
        padding: 15px 14px 15px 16px;
      }
    }
  }
  .card__wrapper {
    display: flex;
    gap:40px;
  }

  //team
  .team {
    padding: 8.125rem 15.438rem 8.125rem 15.438rem;
    .team__members {
      display: flex;
      align-items: center;
      gap: 8.125rem;
      margin-top: 5rem;
    }
    .team__title {
      text-align: center;
      color: ${headerCoolBlack};
font-size: 40px;
font-weight: 500;
line-height: 52px;
word-wrap: break-word
    }
  
    .member__first,.member__second,.member__third,.member__fourth {
      position: relative;
      #member {
        position: absolute;
        top: 11%;
        left: 22.5%;
        bottom: 0;
        right: 0;
      }
      #member__first {
        width: 275px;
        height: 275px;
        padding-top: 15px;
      }
      .name {
        color: black;
font-size: 24px;
font-weight: 700;
line-height: 21px;
word-wrap: break-word;
text-align: center;
display: inline-block;
width: 100%;
margin: 30px 0 20px;

      }
      .position {
        font-size: 16px;
font-weight: 400;
line-height: 21px;
word-wrap: break-word;
text-align: center;
color: #BAB8C8;

      }
    }
  }
  @media only screen and (max-width: 90rem) {
  .slogan {
    padding: 129px 40px 80px 40px;
  }
  .photo__slider {
    height: 490px !important;
  }
  .team__member {
    width: 418px !important;
    height: 338px !important;
  }
 .about__us__texts {
  padding: 0;
  margin-left: 39px;
 }
 .about__us {
  padding-right:40px;
 }
 .instagram__cont {
  left: 25% !important;
  top: 9% !important;
 }

 .gallery  {
  left: 63% !important;
  
}
 .services {
padding: 90px 40px 80px 40px !important;

}
.card__wrapper {
  gap: 29px !important;
}
.left__cheveron__services {
  margin-right:29px !important;
}
.rigth__cheveron__services {
  margin-left:20px !important;
}
.team {
padding: 0;
.team__members {
  gap: 80px;
}
}

}

  `;