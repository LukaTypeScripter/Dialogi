import styled from "styled-components";
import {
  bgMoonImage,
  cheveronLeft,
  cheveronLeftBlue,
  cheveronRigth,
  cheveronRigthBlue,
  galeryFavorite,
  ilustrationPsycology,
  teamMember,
  videoPlay,
} from "../../assets";
import { DarkOrchidPurple, headerCoolBlack, subTextGray } from "../../styled";
import Button from "../../components/Button/Button";
import { bgLavender } from "../../styled";
import { white } from "../../styled";
import Card from "../../components/card/Card";

const MainPage = () => {
  return (
    <MainContainer>
      <div className="slogan">
        <div className="slogan__cont">
          <h1>მეტი პოზიტივი შენს ცხოვრებაში</h1>
          <p>თუ გსურს მიიღო დახმარება პროფესიონალი ექიმებისგან</p>
          <div className="btn__wrapper">
            <ServicesBtn>სერვისები</ServicesBtn>
            <ContactBtn>დაგვიკავშირდით</ContactBtn>
          </div>
        </div>
        <div className="ilustration">
          <img src={ilustrationPsycology} alt="" />
        </div>
      </div>
      {/**about us */}
      <div className="about__us">
        <div className="photo__slider">
          <div className="instagram__cont">
            <img src={videoPlay} alt="" />
          </div>
          <div className="left__cheveron__cont">
            <img src={cheveronLeft} alt="" />
          </div>

          <img src={teamMember} alt="" />

          <div className="rigth__cheveron__cont">
            <img src={cheveronRigth} alt="" />
          </div>
          <div className="gallery">
            <img src={galeryFavorite} alt="" />
          </div>
        </div>

        <div className="about__us__texts">
          <h1>ჩვენ შესახებ</h1>
          <p className="about__text">
            ფსიქოთერაპიისა და კონსულტაციის სახლი "დიალოგი" უკვე 4 წელზე მეტია
            რაც დაარსდა და ამ დროის განმავლობაში არაერთ მომხმარებელს მოემსახურა.
            ჩვენი გუნდის მრავალპროფილური გამოცდილება გვაძლევს შესაძლებლობას, რომ
            კლიენტს შევთავაზოთ სხვა და სხვა სახის სერვისები, როგორც
            ინდივიდუალურად, ასევე ჯგუფური სეანსების მიმართულებით.{" "}
          </p>
          <div className="text">
            <p className="expend__text">
              ჩვენი "სახლის" კარი ყოველთვის ღიაა ადამიანებისთვის, რომლებსაც
              სურთ, რომ ცხოვრება უკეთესობისკენ შეცვალონ, მიიღონ პოზიტივი თავიანთ
              ცხოვრებაში და მზად არიან, რომ არსებული სირთულეები, გამოწვევებად
              აღიქვან, ფსიქოლოგის დახმარებით დაინახონ მათი მოგვარების გზა, და
              ცხოვრება, ბევრად უფრო საინტერესო, მშვიდი და ბედნიერი გახადონ.
            </p>
          </div>
        </div>
      </div>

      <div className="services">
        <h1 className="services__header">დიალოგის სერვისები</h1>
        <div className="services__wrapper">
        <div className="left__cheveron__services">
            <img src={cheveronLeftBlue} alt="" />
          </div>

        {/**cards */}
        <div className="card__wrapper">
        <Card header="თეატრ თერაპია" color="#EFECFF" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
          <Card header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს,  როლს სხვა ადამიანი იკავებს." color="#FFE6D4"/>
          <Card header="ქოუჩინგი" subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. " color="#E0ECFF"/>
        </div>
         
          <div className="rigth__cheveron__services">
            <img src={cheveronRigthBlue} alt="" />
          </div>
        </div>
        
      </div>
    </MainContainer>
  );
};

const ServicesBtn = styled(Button)`
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

const ContactBtn = styled(Button)`
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

const MainContainer = styled.main`
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
`;
export default MainPage;
