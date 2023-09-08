import styled from "styled-components";
import { bgMoonImage, homepagesuccessnow } from "../../../assets";
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
  @media only screen and (max-width: 43.312rem)  {
    margin-left: 0;
  }
`;

export const MainContainer = styled.main`
  background-image: url(${bgMoonImage});
  background-repeat: no-repeat;
  background-position: left -7% right 15%;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media only screen and (max-width: 42.813rem) {
    background-image: url(${homepagesuccessnow});
    background-position: top  right  !important;
  }
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
    .left__cheveron__services,.custom-arrow-left,.custom-arrow-rigth {
      border: 1px #032D60 solid;
      border-radius: 10px;
      margin-right: 53px;
      height: 54px;
      width: 54px;
      img {
        padding: 15px 14px 15px 16px;
      }
    }
    .slick-next {
      right: 65px;
    }
    .slick-prev {
      left: -105px;
    }
    .arrow__cont {
      border: 1px #032D60 solid;
      height: 54px;
      width: 54px;
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
        max-width: 275px;
        max-height: 275px;
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
  .slick-next {
      right: -25px !important;
    }
    .slick-prev {
      left: -55px !important;
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
padding: 90px 60px 80px 60px !important;

}
.card__wrapper {
  gap: 19px !important;
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
  gap: 40px;
  margin-left: 40px;
  margin-right: 40px;
}
}
.position {
    text-align: center;
    width: 275px !important;
   }
   .ilustration {
    margin-left: 0;
   }
}
@media only screen and (max-width: 43.312rem) {
  .slogan {
    flex-direction: column;
    padding:20px 20px 40px;
  }
  .slick-next {
      right: -35px !important;
    }
    .slick-prev {
      left: auto;
    }
  .slogan__cont {
    margin-left: 0;
    h1 {
font-size: 32px !important;

line-height: 32px !important;

    }
    p{
      font-size: 20px !important;
      text-align: start;
    }
  }
      .btn__wrapper {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    gap: 10px;
  }
  .slogan__cont {
    margin-left: 0 !important;
  }
  #ilustration{
    width: 100%;
    margin: 20px;
    position: relative;
  }
  .team__member {
    width: 264px !important;
    height: 164px !important;

  }
  .photo__slider {
    width: 100% !important;
    height: 468px !important;
  }
  .about__us {
    flex-direction: column;
    padding-right: 0;
    padding-top: 40px !important;
   
  }
  .instagram__cont,.gallery {
    width: 42px !important;
    height: 42px !important;
    padding: 0 !important;
    img {
     width: 18px;
     height: 18px;
     margin-top: 12px;
     margin-left: 12px;
    }
  }
  .gallery {
    top: 63% !important;
  }
  .instagram__cont {
    top: 28% !important;
  }
  .about__us__texts {
    h1 {
      margin-left: 20px;
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 64px;
    }
  }
  .about__text {
    margin-left: 20px;
    margin-right: 20px;
  }
  .expend__text::before {
    left: -80px !important;
    height: 269px !important;
  }
  .expend__text {
    margin-left: 40px !important;
   
  }
  .left__cheveron__cont img,.rigth__cheveron__cont img {
    margin: 0 15px !important;
    padding: 12px !important;
  }
  .left__cheveron__services img,.rigth__cheveron__services img {
    padding: 0 !important;
    padding-top: 8px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
  .left__cheveron__services ,.rigth__cheveron__services {
    width: 42px !important;
    height: 42px !important;
  }
  .services {
    padding: 40px 80px 53px !important;
  }
  .wrapper__team__members {
    display: flex;
    align-items: center;
  }
  .team__members {
    margin-left: 20px !important;
    margin-top: 20px !important;
  }
  .left__cheveron__posts {
    margin-right: 20px !important;
  }
  .rigth__cheveron__posts {
    margin-left: 20px !important;
  }
  .ilustration {
    width: auto;
    height: auto;
  }
  
}
  `;