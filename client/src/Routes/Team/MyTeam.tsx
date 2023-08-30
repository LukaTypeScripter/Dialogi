
import { TeamMember1, TeamMember2, TeamMember3, TeamMember4, TeamMember5, TeamMember6, arrowRigthPurple, cheveronLeft, cheveronRigth } from "../../assets";
import TeamCards from "../../components/teamCards/TeamCards";
import { Btns } from "../../components/rates/Rates";
import Card from "../../components/card/Card";
import { TeamContainer } from "./styles";
import { Helmet } from "react-helmet-async";
import useMediaQuery from "../../Hooks/useMediaQuery";

const MyTeam = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  return (
    <TeamContainer>
      <Helmet>
        <title>ჩვენი გუნდი</title>
        <meta 
          name="description"
          content="    ჩვენი გუნდი დაკომპლექტებულია უმაღლესი დონის პროფესიონალებით, რომლებსაც
          როგორც თეორიული ცოდნის, ისე პრაქტიკული მუშაობის მრავალწლიანი
          გამოცდილება აქვთ. მუშაობენ ევროპული სტანდარტებისა და ეთიკის კოდექსის
          სრული დაცვით."
        />
        <link rel="canonical" href="/team" />
      </Helmet>
      <div className="my__team">
        <h1 className="my__team__title">ჩვენი გუნდი</h1>
        <p className="my__Team__subtitle">
          ჩვენი გუნდი დაკომპლექტებულია უმაღლესი დონის პროფესიონალებით, რომლებსაც
          როგორც თეორიული ცოდნის, ისე პრაქტიკული მუშაობის მრავალწლიანი
          გამოცდილება აქვთ. მუშაობენ ევროპული სტანდარტებისა და ეთიკის კოდექსის
          სრული დაცვით.
        </p>
        <div className="cards__wrapper">
        <TeamCards title="ქეთევან ირემაშვილი" subtitle="ქოუჩი, პერსონალური ტრენერი" img={TeamMember1}/>
        <TeamCards title="ქეთი მესხიშვილი" subtitle="ფსიქოლოგი, ფსიქოთერაპევტი, გეშტალტთერაპევტი, ტრენერი, კვებითი ჩვევების სპეციალისტი" img={TeamMember2}/>
        <TeamCards title="თამარ ლაფაჩი" subtitle="ფსიქოლოგი, ფსიქოთერაპევტი" img={TeamMember3}/>
        <TeamCards title="ვლადიმერ ბელკოვი" subtitle="ფსიქოლოგი, ფსიქოთერაპევტი, ფსიქიატრი, სექსოპათოლოგი და რეფლექტოთერაპევტი" img={TeamMember4}/>
        <TeamCards title="ნონა ტაბატაძე" subtitle="ფსიქოლოგი, გეშტალტთერაპევტი, არტ თერაპიის სპეციალისტი" img={TeamMember5}/>
        <TeamCards title="ანა მეუნარგია" subtitle="ბავშვთა ფსიქოლოგი" img={TeamMember6}/>
    
        </div>
      </div>

      <div className="services">
            <h1 className="services__title">სერვისები</h1>
            <p className="services__subtitle">ჩვენთვის მნიშვნელოვანია, რომ ყოველდღიურად ვიმუშავოთ არსებული სერვისების დახვეწასა და სიახლეების დანერგვაზე, სწორად ამიტომ, ძალიან ხშირად ვთავაზობთ ჩვენს მომხმარებლებს ახალ სერვისებს, რომლებიც მათი მოთხოვნების შესაბამისად დგება და ყალიბდება როგორც ახალი ჯგუფური, ან ინდივიდუალური ტრეინინგი. თუ თვლით, რომ საჭიროა კიდევ ახალი სერვისის დამატება, ჩვენ მზად ვართ მოვისმინოთ თქვენი აზრი და მაქსიმალურად გავითვალისწინოთ :)</p>
            <div className="btn__wrapper">
            <Btns>
          <p>ყველას ნახვა</p>
          <img src={arrowRigthPurple} alt="" />
        </Btns>
            </div>
      </div>

      <div className="slider__cards__wrapper">
      <div className="left__cheveron__cont">
            <img src={cheveronLeft} alt="" />
          </div>
          {isAboveTabletScreens ? (
            <Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
          ) : (
<>
<Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
            <Card color="#FFE6D4" header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს, ხოლო თქვენს როლს სხვა ადამიანი იკავებს."/>
            <Card color="#E0ECFF" header="ქოუჩინგი" subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. "/>
</>
          )}
            

            <div className="rigth__cheveron__cont">
            <img src={cheveronRigth} alt="" />
          </div>
      </div>
    </TeamContainer>
  );
};

export default MyTeam;
