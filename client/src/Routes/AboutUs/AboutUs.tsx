import styled from "styled-components";
import { headerCoolBlack, subTextGray } from "../../styled";
import {
  Play,
  TestVIdeo,
  aboutUsRectangle,
  check,
  cheveronLeftPurple,
  cheveronRigthPurple,
  heart,
  star,
  teamPhoto,
  users,
} from "../../assets";
import AboutUsCard from "../../components/aboutusCard/AboutUsCard";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet-async";

export const AboutUs = () => {
  return (
    <AboutContainer>
      <Helmet>
        <title>ჩვენს შესახებ</title>
        <meta
          name="description"
          content="აქ თქვენ შეგიძლიათ გაიგოთ უფრო მეტი ჩვენი გუნდის შესახებ!"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1 className="about__us__text">ჩვენ შესახებ</h1>
      <p className="about__us__subtext">
        ფსიქოთერაპიისა და კონსულტაციის სახლი "დიალოგი" უკვე 4 წელზე მეტია რაც
        დაარსდა და ამ დროის განმავლობაში არაერთ მომხმარებელს მოემსახურა. ჩვენი
        გუნდის მრავალპროფილური გამოცდილება გვაძლევს შესაძლებლობას, რომ კლიენტს
        შევთავაზოთ სხვა და სხვა სახის სერვისები, როგორც ინდივიდუალურად, ასევე
        ჯგუფური სეანსების მიმართულებით. თითოეული სპეციალისტის მიზანია, რომ
        ჩვენთან მოსულ ნებისმიერ ადამიანს, შეუქმნას ისეთი გარემო, სადაც თავს
        დაცულად, მშვიდად და კომფორტულად იგრძნობს.
      </p>
      <div className="about__us__book">
        <div className="book__wrapper">
          <div className="card__wrapper">
            <AboutUsCard
              title="ევროპის სტანდარტები"
              subtitle="დიალოგის გუნდის თითოეული წევრი მუშაობს ევროპის სტანდარტებისა და ეთიკის კოდექსის სრული დაცვით, რომელიც არამხოლოდ მომხმარებელთან დამოკიდებულებასა და მათზე ზრუნვის უმაღლეს სტანდარტებს გულისხმობს, არამედ, თითოეული თანამშრომელი თავად გადის სუპერვიზიას უცხოელ სპეციალისტებთან."
              img={check}
            />
            <AboutUsCard
              img={users}
              title="პეციალისტთა გუნდი"
              subtitle="მომხმარებლებს ვაძლევთ საშუალებას, რომ არამხოლოდ ქართვველ სპეციალისტთან ჰქონდეთ წვდომა, არამედ უცხოელ, მოწვეულ სპეციალისტებთან, რომლებიც საქართველოში, სპეციალურად, დიალოგის მოწვევით ჩამოდიან და  ჩვენს თანამშრომლებს უზიარებენ თავიანთ ცოდნასა."
            />
            <AboutUsCard
              img={star}
              title="შეფასებები"
              subtitle="ჩვენთვის უდიდესი მნიშვნელობა აქვს, რას ფიქრობენ ჩვენი კლიენტბეი ჩვენზე, რა მოსწონთ, რისი გაუმჯობესება სურთ, რათა შევძლოთ რომ თითოეულ თქვენგან შემოგთავაზოთ ის გარემო, რომელიც ნამდვილად მოგიტანთ პოზიტივს "
            />
            <AboutUsCard
              img={heart}
              title="გარემო"
              subtitle={`ჩვენი "სახლის" კარი ყოველთვის ღიაა ადამიანებისთვის, რომლებსაც სურთ, რომ ცხოვრება უკეთესობისკენ შეცვალონ,`}
            />
          </div>
          <div>
            <img src={teamPhoto} alt="" />
          </div>
        </div>
        <Btn>დაჯავშნე დღესვე</Btn>
      </div>
      <div className="clients__rate__container">
        <h1 className="clients__rate__title">
          ნახეთ ჩვენი კლიენტების შეფასებები
        </h1>
        <p className="clients__rate__subtitle">
          ჩვენთვის უდიდესი მნიშვნელობა აქვს, რას ფიქრობენ ჩვენი კლიენტბეი
          ჩვენზე, რა მოსწონთ, რისი გაუმჯობესება სურთ, რათა შევძლოთ რომ თითოეულ
          თქვენგან შემოგთავაზოთ ის გარემო და სიტუაცია, რომელიც ნამდვილად
          მოგიტანთ პოზიტივს თქვენს ცხოვრებაში და გაგრძნობინებთ თავს სახლში,
          სადაც ყველა თქვენზე იზრუნებს 3
        </p>
        <div className="wrapper">
          <div className="arrow__left">
            <img src={cheveronLeftPurple} alt="" />
          </div>

          <div className="cards__wrapper">
            <div className="card">
              <img src={TestVIdeo} alt="" />
              <div className="blur__play">
                <img src={Play} alt="" />
                <div className="minutes">01:54</div>
                <p className="video__name">ტესტ ვიდეო 1</p>
              </div>
            </div>

            <div className="card">
              <img src={TestVIdeo} alt="" />
              <div className="blur__play">
                <img src={Play} alt="" />
                <div className="minutes">01:54</div>
                <p className="video__name">ტესტ ვიდეო 1</p>
              </div>
            </div>

            <div className="card">
              <img src={TestVIdeo} alt="" />
              <div className="blur__play">
                <img src={Play} alt="" />
                <div className="minutes">01:54</div>
                <p className="video__name">ტესტ ვიდეო 1</p>
              </div>
            </div>
          </div>

          <div className="arrow__rigth">
            <img src={cheveronRigthPurple} alt="" />
          </div>
        </div>
      </div>

      <div className="my__team">
        <h1 className="my__team__title">ჩვენი გუნდი</h1>
        <p className="my__team__subtitle">ჩვენი გუნდი დაკომპლექტებულია უმაღლესი დონის პროფესიონალებით, რომლებსაც როგორც თეორიული ცოდნის, ისე პრაქტიკული მუშაობის მრავალწლიანი გამოცდილება აქვთ. მუშაობენ ევროპული სტანდარტებისა და ეთიკის კოდექსის სრული დაცვით.</p>
        <div className="btn__wrapper">
       
        <Btns>
          <p>ყველას ნახვა</p>
          <img src="" alt="" />
        </Btns>
        </div>
     
      </div>
    </AboutContainer>
  );
};
const Btns = styled(Button)`
  display: flex;
  padding:17px 20px 18px;
  border: 0.75px #911DC4 solid;
  background-color: transparent;
  border-radius: 7px;

`

const Btn = styled(Button)`
  padding: 17px 37px 18px 35.84px;
  color: white;
  background-color: #911dc4;
  font-size: 16px;
  font-family: FiraGO;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
  border: none;
  outline: none;
  margin-left: 247px;
  margin-bottom: 100px;
  border-radius: 7px;
`;
const AboutContainer = styled.div`
.btn__wrapper {
margin: auto;
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
    height: 1450px;
    background-size: cover;
  }
  .book__wrapper {
    display: flex;
    padding: 300px 247px 100px;
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
`;
