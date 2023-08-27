
import { Link } from "react-router-dom";
import { headerLogo } from "../../assets";
import { FooterCont } from "./styles";
import useMediaQuery from "../../Hooks/useMediaQuery";

const Footer = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  return (
    <FooterCont>
      <div className="header__top">
        <img src={headerLogo} alt="" className="footer__logo"/>
        <div className="link__wrapper">
          <Link to={"/"}>მთავარი</Link>
          <Link to={"/about"}>ჩვენ შესახებ</Link>
          <Link to={"/team"}>ჩვენი გუნდი</Link>
          <Link to={"/services"}>სერვისები</Link>
          <Link to={"/contact"}>კონტაქტი</Link>
        </div>
      </div>
      <hr />
      <div className="bottom__wrapper">
        <div className="contact__us__wrapper">
        <h1>დაგვიკავშირდით</h1>
        {!isAboveTabletScreens && (
 <div className="new__routes__wrapper">
 <Link to={"/about"}> ბავშვთა ფსიქოლოგია</Link>
 <Link to={"/team"}>ზრდასრულთა ფსიქოლოგია</Link>
 <Link to={"/services"}>წყვილების ფსიქოლოგია</Link>
 <Link to={"/contact"}>ჯგუფური თერაპია</Link>
</div>
        )}
       
        </div>
        {isAboveTabletScreens ? (
          <>
          <div className="contact__info">
             <p>თბილისი, საქართველო</p>
             <p>ბოხუას ქუჩა</p>
             <p>Tel: +995 592 00 32 32</p>
          </div>
          <hr />
          <div className="contact__info">
             <p>© power 2021 - All Rights Reserved</p>
             <p>Privacy police</p>
             <p>Terms of Use</p>
          </div>
          </>
        ): (
          <>
           <div className="contact__info">
       
           <p>თბილისი, საქართველო</p>
             <p>ბოხუას ქუჩა</p>
        </div>
        <div className="contact__location">
        <p>Tel: +995 592 00 32 32</p>
            <p>© power 2021 - All Rights Reserved</p>
        </div></>
        )}
       
      </div>
    </FooterCont>
  );
};



export default Footer;
