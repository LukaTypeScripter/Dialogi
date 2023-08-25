
import { Link } from "react-router-dom";
import { headerLogo } from "../../assets";
import { FooterCont } from "./styles";

const Footer = () => {
  return (
    <FooterCont>
      <div className="header__top">
        <img src={headerLogo} alt="" />
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
        <div className="new__routes__wrapper">
          <Link to={"/about"}> ბავშვთა ფსიქოლოგია</Link>
          <Link to={"/team"}>ზრდასრულთა ფსიქოლოგია</Link>
          <Link to={"/services"}>წყვილების ფსიქოლოგია</Link>
          <Link to={"/contact"}>ჯგუფური თერაპია</Link>
        </div>
        </div>
        
        <div className="contact__info">
        <p>თბილისი, საქართველო</p>
        <p>Tel: +995 592 00 32 32</p>
        </div>
        <div className="contact__location">
            <p>ბოხუას ქუჩა</p>
            <p>© power 2021 - All Rights Reserved</p>
        </div>
      </div>
    </FooterCont>
  );
};



export default Footer;
