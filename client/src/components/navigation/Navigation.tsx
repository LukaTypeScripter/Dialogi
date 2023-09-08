import "@fontsource/firago";
import "@fontsource/firago/600.css";
import "@fontsource/firago/600-italic.css";
import "@fontsource/firago/700.css";
import "@fontsource/firago/700-italic.css";
import { cheveronLeftBlue, georgia, headerLogo } from "../../assets";
import { Link } from "react-router-dom";
import { NavCont, PsycologyBtn, ContactBtn } from "./styles";
import useMediaQuery from "../../Hooks/useMediaQuery";
import { useState } from "react";
const Navigation = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  const [isOpen,setIsOpen] = useState(true)
  return (
    <NavCont>
      {isAboveTabletScreens ? (
        <>
        <div className="mobile__wrapper">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={() => setIsOpen(!isOpen)}>
<g id="menu-3 1">
<path id="Vector" d="M3.5 14H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M3.5 7H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M3.5 21H24.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

          <img src={headerLogo} alt="" />
         
         
        </div>
        {isOpen && (
             <div className="mobile__nav">
                <div className="nav__cont">
                  <div className="nav__header">
                  <img src={headerLogo} alt="" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(!isOpen)}>
<g id="vuesax/linear/close-square">
<g id="close-square">
<path id="Vector" d="M9.17004 14.83L14.83 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M14.83 14.83L9.17004 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
                  </div>
                  <div className="links__Wrapper">
            
                  <Link to={"/"}>მთავარი</Link>
        <Link to={"/about"}>ჩვენ შესახებ</Link>
        <Link to={"/team"}>ჩვენი გუნდი</Link>
        <Link to={"/services"}>სერვისები</Link>
        <Link to={"/contact"}>კონტაქტი</Link>
        <Link to={""}><PsycologyBtn>Psychologi.ge</PsycologyBtn></Link>
    
                  </div>
   
                    <div className="lengueges">
                      <div className="lengueges__wrapper">
                      <img src={georgia} alt="" />
   <p>GEO</p>
   <img src={cheveronLeftBlue} alt="" className="transform" />
                      </div>

                    </div>
                </div>
                
             </div>
          )}
        </>
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
