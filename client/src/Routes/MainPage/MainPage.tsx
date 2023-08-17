import {
  bgMemberFirst,
  bgMemberFourth,
  bgMemberThree,
  bgMemberTwo,
  cheveronLeft,
  cheveronLeftBlue,
  cheveronLeftPurple,
  cheveronRigth,
  cheveronRigthBlue,
  cheveronRigthPurple,
  firstMember,
  fourthMember,
  galeryFavorite,
  ilustrationPsycology,
  secondMember,
  statusFirst,
  statusSecond,
  statusThird,
  teamMember,
  thirdMember,
  videoPlay,
} from "../../assets";
import Card from "../../components/card/Card";
import { Helmet } from "react-helmet-async";
import "@fontsource/firago";
import "@fontsource/firago/500.css";
import "@fontsource/firago/500-italic.css";
import "@fontsource/firago/400.css";
import "@fontsource/firago/400-italic.css";
import "@fontsource/firago/600.css";
import "@fontsource/firago/600-italic.css";
import "@fontsource/firago/700.css";
import "@fontsource/firago/700-italic.css";
import { MainContainer, ContactBtn, ServicesBtn } from "./styles";
import styled from "styled-components";
import { headerCoolBlack } from "../../styled";
import ServicesCard from "../../components/servicesCard/servicesCard";
const MainPage = () => {
  return (
    <MainContainer>
      <Helmet>
        <title>მთავარი გვერდი</title>
        <meta
          name="description"
          content="ეს არის ჩვენი თავარი გვედი,სადაც შეგიძლიათ ნახოთ ინფორმაცია გუნდზე."
        />
        <link rel="canonical" href="/" />
      </Helmet>
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
            <Card
              header="თეატრ თერაპია"
              color="#EFECFF"
              subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."
            />
            <Card
              header="სისტემური განლაგება "
              subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს,  როლს სხვა ადამიანი იკავებს."
              color="#FFE6D4"
            />
            <Card
              header="ქოუჩინგი"
              subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. "
              color="#E0ECFF"
            />
          </div>

          <div className="rigth__cheveron__services">
            <img src={cheveronRigthBlue} alt="" />
          </div>
        </div>
      </div>

      {/**our team */}
      <div className="team">
        <h1 className="team__title">ჩვენი გუნდი</h1>
        <div className="team__members">
          <div className="member__first">
            <img src={bgMemberFirst} alt="" id="member__first" />
            <img src={firstMember} alt="" id="member" />
            <div className="info__wrapper">
              <b className="name">ქეთევან ირემაშვილი</b>
              <p className="position">ქოუჩი, პერსონალური ტრენერი</p>
            </div>
          </div>
          <div className="member__second">
            <img src={bgMemberTwo} alt="" id="member__first" />
            <img src={secondMember} alt="" id="member" />
            <div className="info__wrapper">
              <b className="name">თამარ ლაფაჩი</b>
              <p className="position">ფსიქოლოგი, ფსიქოთერაპევტი</p>
            </div>
          </div>
          <div className="member__third">
            <img src={bgMemberThree} alt="" id="member__first" />
            <img src={thirdMember} alt="" id="member" />
            <div className="info__wrapper">
              <b className="name">ანა მეუნარგია</b>
              <p className="position">ბავშვთა ფსიქოლოგი</p>
            </div>
          </div>
          <div className="member__fourth">
            <img src={bgMemberFourth} alt="" id="member__first" />
            <img src={fourthMember} alt="" id="member" />

            <b className="name">ქეთი მესხიშვილი</b>
            <p className="position">
              ფსიქოლოგი, ფსიქოთერაპევტი, გეშტალტთერაპევტი, ტრენერი, კვებითი
              ჩვევების სპეციალისტი
            </p>
          </div>
        </div>
      </div>

      <RecentPosted>
        <h1 className="recent__header">ბოლოს განთავსებული სტატიები</h1>
        <div>
          <div className="wrapper">
            <div className="left__cheveron__posts">
              <img src={cheveronLeftPurple} alt="" />
            </div>

            <div className="service__cards__wrapper">
              <ServicesCard
                img={statusFirst}
                title="გამოიმუშავე სწორი ჩვევები"
                subtext="ს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავსს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავს ..."
              />
              <ServicesCard
                img={statusSecond}
                title="პოსტრამვული სტრესული აშლილობა"
                subtext="ს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავს ..."
              />
              <ServicesCard
                img={statusThird}
                title="ჭარბი წონა და მენტალური ჯანმრთელობა"
                subtext="ს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავს ..."
              />
            </div>

            <div className="rigth__cheveron__posts">
              <img src={cheveronRigthPurple} alt="" />
            </div>
          </div>
        </div>
      </RecentPosted>
    </MainContainer>
  );
};
const RecentPosted = styled.div`
  padding: 8.125rem 15.813rem 9.75rem 15.813rem;
  .recent__header {
    color: ${headerCoolBlack};
    font-size: 40px;
    font-family: "FiraGO";
    font-weight: 500;
    line-height: 52px;
    word-wrap: break-word;
    text-align: center;
  }
  .service__cards__wrapper {
    display: flex;
    gap: 40px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 5rem;
  }
  .rigth__cheveron__posts,
  .left__cheveron__posts {
    width: 54px;
    height: 54px;
    border: 1px #d3a5e7 solid;
    border-radius: 10px;
    img {
      padding: 15px 14px 15px 16px;
    }
  }
  .rigth__cheveron__posts {
    margin-left: 46px;
  }
  .left__cheveron__posts {
    margin-right: 46px;
  }
`;
export default MainPage;
