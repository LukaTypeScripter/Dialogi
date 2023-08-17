
import styled from "styled-components";
import { headerCoolBlack, subTextGray } from "../../styled";
import { bgDarkPurple } from "../../styled";
import { check, heart, star, teamPhoto, users } from "../../assets";
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
           <AboutUsCard title="ევროპის სტანდარტები" subtitle="დიალოგის გუნდის თითოეული წევრი მუშაობს ევროპის სტანდარტებისა და ეთიკის კოდექსის სრული დაცვით, რომელიც არამხოლოდ მომხმარებელთან დამოკიდებულებასა და მათზე ზრუნვის უმაღლეს სტანდარტებს გულისხმობს, არამედ, თითოეული თანამშრომელი თავად გადის სუპერვიზიას უცხოელ სპეციალისტებთან." img={check}/>
           <AboutUsCard img={users} title="პეციალისტთა გუნდი" subtitle="მომხმარებლებს ვაძლევთ საშუალებას, რომ არამხოლოდ ქართვველ სპეციალისტთან ჰქონდეთ წვდომა, არამედ უცხოელ, მოწვეულ სპეციალისტებთან, რომლებიც საქართველოში, სპეციალურად, დიალოგის მოწვევით ჩამოდიან და  ჩვენს თანამშრომლებს უზიარებენ თავიანთ ცოდნასა."/>
           <AboutUsCard img={star} title="შეფასებები" subtitle="ჩვენთვის უდიდესი მნიშვნელობა აქვს, რას ფიქრობენ ჩვენი კლიენტბეი ჩვენზე, რა მოსწონთ, რისი გაუმჯობესება სურთ, რათა შევძლოთ რომ თითოეულ თქვენგან შემოგთავაზოთ ის გარემო, რომელიც ნამდვილად მოგიტანთ პოზიტივს " />
           <AboutUsCard img={heart} title="გარემო" subtitle={`ჩვენი "სახლის" კარი ყოველთვის ღიაა ადამიანებისთვის, რომლებსაც სურთ, რომ ცხოვრება უკეთესობისკენ შეცვალონ,`}/>
            </div>
            <div>
            <img src={teamPhoto} alt="" />
            </div>
          
        </div>
        <Btn>დაჯავშნე დღესვე</Btn>
        </div>
        
    </AboutContainer>
  );
};
const Btn = styled(Button)`
    padding: 17px 37px 18px 35.84px;
    color: white;
    background-color: #911DC4;
    font-size: 16px;
font-family: FiraGO;
font-weight: 500;
line-height: 21px;
word-wrap: break-word;
border: none;
outline: none;
margin-left: 200px;
margin-bottom: 100px;
`
const AboutContainer = styled.div`
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
    background-color:${bgDarkPurple};
    margin-top: 5rem;
    margin-bottom: 5rem;

  }
  .book__wrapper {
    display: flex;
    padding: 160px 200px 100px ;
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
    gap:40px;
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
    color: #B9B3D9;
font-size: 18px;
font-family: FiraGO;
font-weight: 400;
line-height: 33px;
word-wrap: break-word
}
`;
