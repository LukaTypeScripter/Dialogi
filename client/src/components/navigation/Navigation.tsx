import "@fontsource/firago";
import "@fontsource/firago/600.css";
import "@fontsource/firago/600-italic.css";
import "@fontsource/firago/700.css";
import "@fontsource/firago/700-italic.css";
import { headerLogo } from "../../assets";
import { Link } from "react-router-dom";
import { NavCont, PsycologyBtn, ContactBtn } from "./styles";
const Navigation = () => {
  return (
    <NavCont>
      <div className="links__cont">
        <img src={headerLogo} alt="" />
        <Link to={""}>მთავარი</Link>
        <Link to={""}>ჩვენ შესახებ</Link>
        <Link to={""}>ჩვენი გუნდი</Link>
        <Link to={""}>სერვისები</Link>
        <Link to={""}>კონტაქტი</Link>
        <Link to={""}><PsycologyBtn>Psychologi.ge</PsycologyBtn></Link>
      </div>
      <div className="left__side">
        <div className="left__side__contact">
          <div className="contact">
          <Link to={""} className="contact__us">Contact Us</Link>
          <p>1-800-664-9073</p>
          </div>
          <Link to={""} className="login">
          Login
        </Link>
        </div>
        <Link to={""}>
          <ContactBtn>დაგვიკავშირდით</ContactBtn>
        </Link>
      </div>
    </NavCont>
  );
};

export default Navigation;
