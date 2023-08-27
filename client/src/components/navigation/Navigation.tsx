import "@fontsource/firago";
import "@fontsource/firago/600.css";
import "@fontsource/firago/600-italic.css";
import "@fontsource/firago/700.css";
import "@fontsource/firago/700-italic.css";
import { headerLogo } from "../../assets";
import { Link } from "react-router-dom";
import { NavCont, PsycologyBtn, ContactBtn } from "./styles";
import useMediaQuery from "../../Hooks/useMediaQuery";
const Navigation = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  return (
    <NavCont>
      {isAboveTabletScreens ? (
        <div className="mobile__wrapper">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="menu-3 1">
<path id="Vector" d="M3.5 14H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M3.5 7H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M3.5 21H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

          <img src={headerLogo} alt="" />
        </div>
      ): (
        <div className="links__cont">
        <img src={headerLogo} alt="" />
        <Link to={"/"}>მთავარი</Link>
        <Link to={"/about"}>ჩვენ შესახებ</Link>
        <Link to={"/team"}>ჩვენი გუნდი</Link>
        <Link to={"/services"}>სერვისები</Link>
        <Link to={"/contact"}>კონტაქტი</Link>
        <Link to={""}><PsycologyBtn>Psychologi.ge</PsycologyBtn></Link>
      </div>
      )}
     
      <div className="left__side">
        <div className="left__side__contact">
          <div className="contact">
          </div>
        </div>
        {!isAboveTabletScreens  && (
          <ContactBtn>დაგვიკავშირდით</ContactBtn>
        )}
        <Link to={""}>

        </Link>
      </div>
    </NavCont>
  );
};

export default Navigation;
