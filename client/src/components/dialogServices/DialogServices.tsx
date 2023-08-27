
import useMediaQuery from '../../Hooks/useMediaQuery';
import { cheveronLeftBlue, cheveronRigthBlue } from '../../assets'
import Card from '../card/Card'

const DialogServices = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  return (
   <>
   <div className="services__wrapper">
          <div className="left__cheveron__services">
            <img src={cheveronLeftBlue} alt="" />
          </div>

          {/**cards */}
          <div className="card__wrapper">
            {isAboveTabletScreens ? (
               <Card
               header="თეატრ თერაპია"
               color="#EFECFF"
               subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."
             />
            ) : (

<>
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
</>
            )}
           
           
          </div>

          <div className="rigth__cheveron__services">
            <img src={cheveronRigthBlue} alt="" />
          </div>
        </div>
   </>
  )
}

export default DialogServices