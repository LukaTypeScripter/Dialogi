import styled from "styled-components";
import { aboutUsRectangle, rec } from "../../../assets";
import Button from "../../../components/Button/Button";
import { subTextGray, headerCoolBlack } from "../../../styled";



export const Btn = styled(Button)`
width: 217px;
height: 56px;
  color: white;
  background-color: #911dc4;
  font-size: 16px;
  font-family: FiraGO;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
  border: none;
  outline: none;
  border-radius: 7px;
  margin-left: 247px;
  margin-top: 50px;
  margin-bottom: 100px;
  @media only screen and (max-width: 43.3rem)  {
    margin-top: 20px;
  margin-left: 19.5px;
  padding-bottom: 20px;
  }


`;
export const AboutContainer = styled.div`
.btn__wrapper {
margin-left: 45%;
margin-top: 30px;
}
  .about__us__text,
  .about__us__subtext {
    text-align: center;
  }
  .about__us__subtext {
    color: ${subTextGray};
    max-width: 1429px;
    font-size: 20px;
    font-family: FiraGO;
    font-weight: 400;
    line-height: 30px;
    word-wrap: break-word;
    margin-top: 30px;
    margin-left: 15.313rem;
  }
  .about__us__text {
    color: ${headerCoolBlack};
    font-size: 56px;
    font-family: FiraGO;
    font-weight: 500;
    line-height: 64px;
    word-wrap: break-word;
  }
  .about__us__book {
    border-top-left-radius: 15%;
    background-image: url(${aboutUsRectangle});
    background-repeat: no-repeat;
    margin-top: 5rem;
    margin-bottom: 5rem;
    height: 100%;
    background-size: cover;
    position: relative;
  }
  .book__wrapper {
    display: flex;
    padding: 360px 247px 100px;
   
  }
  .icon__wrapper {
    background-color: #522367;
    width: 64px;
    height: 64px;
    border-radius: 10px;
    img {
      margin: 20px;
    }
  }
  .card {
    max-width: 373px;
  }
  .card__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
  .card__title {
    color: white;
    font-size: 24px;
    font-family: FiraGO;
    font-weight: 400;
    line-height: 52px;
    word-wrap: break-word;
    margin: 20px 0 20px;
  }
  .card__subtitle {
    color: #b9b3d9;
    font-size: 18px;
    font-family: FiraGO;
    font-weight: 400;
    line-height: 33px;
    word-wrap: break-word;
  }

  .clients__rate__container {
    padding: 80px 143px 80px 143px;
    .clients__rate__title,
    .clients__rate__subtitle {
      text-align: center;
    }
    .clients__rate__title {
      color: #032d60;
      font-size: 56px;
      font-family: FiraGO;
      font-weight: 500;
      line-height: 64px;
      word-wrap: break-word;
    }
    .clients__rate__subtitle {
      color: #938fa9;
      font-size: 20px;
      font-family: FiraGO;
      font-weight: 400;
      line-height: 30px;
      word-wrap: break-word;
      margin-top: 30px;
    }
  }
  .arrow__left {
    width: 54px;
    height: 54px;
    border: 1px #d3a5e7 solid;
    border-radius: 10px;
    img {
      padding: 15px 14px 15px 16px;
    }
  }
  .arrow__rigth {
    width: 54px;
    height: 54px;
    border: 1px #d3a5e7 solid;
    border-radius: 10px;
    margin-left: 50px;
    img {
      padding: 15px 14px 15px 16px;
    }
  }
  .wrapper {
    display: flex;
    gap: 50px;
    align-items: center;
  }
  .card {
    position: relative;
    img {
      border-radius: 15px;
    }
    .blur__play {
      position: absolute;
      background: rgba(98.71, 74.33, 109.44, 0.33);
      backdrop-filter: blur(9px);
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 15px;
      width: 442px;
      img {
        margin: 84px 184px 85px 185px;
      }
    }
  }
  .minutes {
    padding: 5px 9px 4px 9px;
    background: #5c22ad;
    border-radius: 4px;
    position: absolute;
    left: 85%;
    top: 85%;
    text-align: center;
    color: white;
    font-size: 14px;
    font-family: FiraGO;
    font-weight: 500;

    word-wrap: break-word;
  }
  .video__name {
    color: #032d60;
    font-size: 24px;
    font-family: FiraGO;
    font-weight: 500;
    line-height: 21px;
    word-wrap: break-word;
    margin-top: 20px;
  }
  .cards__wrapper {
    display: flex;
    gap: 100px;
    margin-top: 5rem;
  }
  .my__team {
    padding: 80px 143px;

    .my__team__title,.my__team__subtitle {
      text-align: center;
    }
    .my__team__title {
      color: #032D60;
font-size: 56px;
font-family: FiraGO;
font-weight: 500;
line-height: 64px;
word-wrap: break-word
    }
    .my__team__subtitle  {
      margin-top: 30px;
      color: #938FA9;
font-size: 20px;
font-family: FiraGO;
font-weight: 400;
line-height: 30px;
word-wrap: break-word
    }
  }
  .team__wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }
  .team__book {
    display: flex;
    align-items: center;
    padding-bottom: 200px;
    gap: 50px;
    padding-left: 143px;
  }
  .blur__bg {
    position: absolute;
    left: 7%;
    right: 0;
    bottom: 0;
    top: 74%;
    background: rgba(185, 179, 217, 0.42); 
    border-radius: 27px; 
    backdrop-filter: blur(26px);
    width: 382px;
    height: 260px;
    .blur__title {
      color: #032D60;
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
    .blur__subtitle, .blur__title {
      text-align: center;
    }
  }
  .blur__btn_wrapper {
   position: absolute;
   left: -35%;
   top: 65%;
   bottom: 0;
  }

  @media only screen and (max-width: 90rem) {
    .book__wrapper {
      padding: 380px 40px !important;
    }
   
    .about__us__subtext {
      width: 1360px;
      margin-left: 40px !important;
    }
      .team__photo {
      max-width: 524px;
      max-height: 887px;
  }
  .clients__rate__container {
    padding: 80px 0 ;
  }
  .wrapper {
    gap: 25px;
  }
  .cards__wrapper {
    gap:30px;
  }
  .card,    .blur__play {
    width: 378px !important;
  }
  .blur__img {
      width: 378px !important;
    }
    .arrow__rigth {
      margin-top: 70px !important;
      margin-left: 0;
    }
    .arrow__left {
      margin-top: 70px !important;
      margin-left: 10px;
    }
    .team__member__img {
      width: 378px;
    }
    .team__book {
      gap: 29px;
      padding-left: 30px !important;
      padding-right: 30px !important;
    }
    .blur__bg {
      width: 338px;
    }
    
  }
  @media only screen and (max-width: 43.3rem)  {
    .about__us__text {
font-size: 32px;
line-height: 64px;
    }
    .about__us__subtext {
      width: auto;
font-size: 16px;
line-height: 30px;

    }
    .about__us__book {
      background-image: url(${rec});
    }
    .team__photo  {
    width: 100%;
    height:284px;
    margin-bottom: 40px;
  }
  .book__wrapper {
    flex-direction: column-reverse;
   padding: 239px 40px 0 !important;
  }
  .about__us__book {
    height: 100%;
  }
  .blur__img,    .blur__play{
    width: 264px !important;
    height: 165px !important;
  }
  .blur__play img {
    margin:  56px 105px !important;
  }
  .minutes {
    left: 78% !important;
    top: 78% !important;
  }
 .wrapper {
  margin: 40px;
 }
 .clients__rate__title {
font-size: 32px !important;
line-height: 32px !important;
width: 388px !important;
margin: 0 40px !important;
 }
 .clients__rate__subtitle {
font-size: 16px !important;
line-height: 30px !important;
width: 388px !important;
margin: 0 40px !important;
 }
 .my__team__title {
  font-size: 32px !important;
 }
 .my__team__subtitle {
  font-size: 16px !important;

 }
 .my__team {
  padding: 40px !important;
 }
 .team__member__img {
  width: 268px !important;

 }
 .blur__bg {
  width: 224px !important;
 }
 .btn__wrapper {
  margin-left: 25%;
 }
 .cards__wrapper {
  .card {
    width: 264px !important;
    height: 165px !important;
  }
 }
 .arrow__left img,.arrow__rigth img {
  padding: 12px !important;
 }
 .team__book {
  gap: 15px;
  padding-left: 20px !important;
 }
 .wrapper {
  margin: 0;
 }
 .left__cheveron__cont img,.rigth__cheveron__cont img {
  padding: 12px !important;
 }
  }
 
`;