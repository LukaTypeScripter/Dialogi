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
import { Helmet } from "react-helmet-async";
import {  useFetchDataMutation,useAboutusimagesMutation } from "../../slices/usersApiSLice";
import { MainContainer, ContactBtn, ServicesBtn } from "./styles";
import styled from "styled-components";
import { headerCoolBlack } from "../../styled";
import ServicesCard from "../../components/servicesCard/servicesCard";
import DialogServices from "../../components/dialogServices/DialogServices";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthState } from "../../slices/authSlice";
import Slider from 'react-slick';
const MainPage = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  const [fetchData, { data, isLoading }] = useFetchDataMutation();
  const [fetchImages, { data: aboutusData, isError, error }] = useAboutusimagesMutation();
const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);

useEffect(() => {
  fetchData()
  fetchImages()
},[userInfo])


if (isLoading) {
  return <div>Loading...</div>;
}
const settingsSmallScreen = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <div style={{width:'54px',height:'54px',}}>
    <img src={cheveronLeftBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
  </div>
  ),
  nextArrow: (
    <div style={{width:'54px',height:'54px',}}>
          <img src={cheveronRigthBlue} style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}} />
        </div>
  ),
};
const settingsBigScreen = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <div style={{width:'54px',height:'54px',}}>
    <img src={cheveronLeftBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
  </div>
  ),
  nextArrow: (
    <div style={{width:'54px',height:'54px',}}>
          <img src={cheveronRigthBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
        </div>
  ),
};
console.log("about us datra " +aboutusData?.map((data) => {return data.content}));
  return (
    <MainContainer>
      <Helmet>
        <title>მთავარი გვერდი</title>
        <meta
          name="description"
          content="ჩვენი სახლის კარი ყოველთვის ღიაა ადამიანებისთვის, რომლებსაც
          სურთ, რომ ცხოვრება უკეთესობისკენ შეცვალონ, მიიღონ პოზიტივი თავიანთ
          ცხოვრებაში და მზად არიან, რომ არსებული სირთულეები, გამოწვევებად
          აღიქვან, ფსიქოლოგის დახმარებით დაინახონ მათი მოგვარების გზა, და
          ცხოვრება, ბევრად უფრო საინტერესო, მშვიდი და ბედნიერი გახადონ."
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
          <img src={ilustrationPsycology} alt="" id="ilustration" />
        </div>
      </div>
      {/**about us */}
      <div className="about__us">
      <div className="about__us__texts">

          {isAboveTabletScreens && (
   <h1>ჩვენ შესახებ</h1>
          )}
      </div>
     
        <div className="photo__slider">
     
          <div className="instagram__cont">
            <img src={videoPlay} alt="" />
          </div>
               <div style={{width:'400px'}}>
              <Slider {...settingsBigScreen}> 
   {aboutusData?.map((data,index) => (
    <img src={`data:image/png;base64,${data.img}`}  alt={`Image ${index + 1}`}
    className="team__member"/>
  ))} 
     </Slider>
              </div>
          <div className="gallery">
            <img src={galeryFavorite} alt="" />
          </div>
          
        </div>
   
        <div className="about__us__texts">
          {!isAboveTabletScreens && (
   <h1>ჩვენ შესახებ</h1>
          )}
       
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
        <DialogServices />
      </div>
    
      {/**our team */}
      <div className="team">
        <h1 className="team__title">ჩვენი გუნდი</h1>
        <div className="team__members">
          {isAboveTabletScreens ? (
            <div className="wrapper__team__members">
    <div className="left__cheveron__services">
            <img src={cheveronLeftBlue} alt="" />
          </div>

          <div className="member__first">
            <img src={bgMemberFirst} alt="" id="member__first" />
            <img src={firstMember} alt="" id="member" />
            <div className="info__wrapper">
              <b className="name">ქეთევან ირემაშვილი</b>
              <p className="position">ქოუჩი, პერსონალური ტრენერი</p>
            </div>
          </div>

         
          <div className="rigth__cheveron__services">
            <img src={cheveronRigthBlue} alt="" />
          </div>
            </div>
          ) : (
            <>
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
            </>
          )}
          
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
              {isAboveTabletScreens ? (
                 <ServicesCard
                 img={statusFirst}
                 title="გამოიმუშავე სწორი ჩვევები"
                 subtext="ს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავსს არის სისტემა, რომელიც ამუშავებს მონაცემებს, ზოგავს ..."
               />
              ) : (
                <>
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
              </>
              )}
             
             
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

  @media only screen and (max-width: 90rem) {
    padding:80px 40px 458px 40px;
   .ilustration {
    margin-left: 0;
   }
   
  }
`;
export default MainPage;
