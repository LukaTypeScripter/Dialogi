
import styled from 'styled-components'
import { cheveronLeftPurple, TestVIdeo, Play, cheveronRigthPurple, arrowRigthPurple, TeamMember1, TeamMember2, TeamMember3 } from '../../assets'
import Button from '../Button/Button'


export const Rates = () => {
  return (
    <>
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
              <img src={TestVIdeo} alt="" className='blur__img'/>
              <div className="blur__play">
                <img src={Play} alt="" />
                <div className="minutes">01:54</div>
                <p className="video__name">ტესტ ვიდეო 1</p>
              </div>
            </div>

            <div className="card">
              <img src={TestVIdeo} alt="" className='blur__img'/>
              <div className="blur__play">
                <img src={Play} alt="" />
                <div className="minutes">01:54</div>
                <p className="video__name">ტესტ ვიდეო 1</p>
              </div>
            </div>

            <div className="card">
              <img src={TestVIdeo} alt="" className='blur__img'/>
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
          <img src={arrowRigthPurple} alt="" />
        </Btns>
        </div>
     
      </div>

      <div className="team__book">
      <div className="arrow__left">
            <img src={cheveronLeftPurple} alt="" />
          </div>

          <div className="team__wrapper">
          <img src={TeamMember1} alt="" className='team__member__img'/>
          <div className="blur__bg">
          <h1 className="blur__title">ქეთევან ირემაშვილი</h1>
          <p className="blur__subtitle">ქოუჩი, პერსონალური ტრენერი</p>
          <div className="blur__btn_wrapper">
          <BtnBook>დაჯავშნა</BtnBook>
          </div>
          </div>
          
          </div>
          <div className="team__wrapper">
          <img src={TeamMember2} alt="" className='team__member__img'/>
          <div className="blur__bg">
          <h1 className="blur__title">ქეთევან ირემაშვილი</h1>
          <p className="blur__subtitle">ქოუჩი, პერსონალური ტრენერი</p>
          <div className="blur__btn_wrapper">
          <BtnBook>დაჯავშნა</BtnBook>
          </div>
          </div>
          
          </div>
          <div className="team__wrapper">
          <img src={TeamMember3} alt=""  className='team__member__img'/>
          <div className="blur__bg">
          <h1 className="blur__title">ქეთევან ირემაშვილი</h1>
          <p className="blur__subtitle">ქოუჩი, პერსონალური ტრენერი</p>
          <div className="blur__btn_wrapper">
          <BtnBook>დაჯავშნა</BtnBook>
          </div>
          </div>
          
          </div>

          <div className="arrow__rigth">
            <img src={cheveronRigthPurple} alt="" />
          </div>
      </div>
    </>
  )
}


export const Btns = styled(Button)`
  display: flex;
  padding:17px 20px 18px;
  border: 0.75px #911DC4 solid;
  background-color: transparent;
  border-radius: 7px;
  gap: 10px;
  p{
    color: #911DC4;
font-size: 16px;
font-family: FiraGO;
font-weight: 500;
line-height: 21px;
word-wrap: break-word
  }

`
export const BtnBook = styled(Button)`
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
  margin-left: 210px;
  @media only screen and (max-width: 90rem) {
    margin-left: 170px;
  }
`;