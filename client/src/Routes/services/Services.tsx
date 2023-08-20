import styled from "styled-components";
import Card from "../../components/card/Card";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <ServicesContainer>
       <Helmet>
        <title>სერვისები</title>
        <meta
          name="description"
          content="    ჩვენთვის მნიშვნელოვანია, რომ ყოველდღიურად ვიმუშავოთ არსებული სერვისების
          დახვეწასა და სიახლეების დანერგვაზე, სწორად ამიტომ, ძალიან ხშირად
          ვთავაზობთ ჩვენს მომხმარებლებს ახალ სერვისებს, რომლებიც მათი მოთხოვნების
          შესაბამისად დგება და ყალიბდება როგორც ახალი ჯგუფური, ან ინდივიდუალური
          ტრეინინგი. თუ თვლით, რომ საჭიროა კიდევ ახალი სერვისის დამატება, ჩვენ
          მზად ვართ მოვისმინოთ თქვენი აზრი და მაქსიმალურად გავითვალისწინოთ :)"
        />
        <link rel="canonical" href="/services" />
      </Helmet>
      <h1 className="services__title">სერვისები</h1>
      <p className="services__subtitle">
        ჩვენთვის მნიშვნელოვანია, რომ ყოველდღიურად ვიმუშავოთ არსებული სერვისების
        დახვეწასა და სიახლეების დანერგვაზე, სწორად ამიტომ, ძალიან ხშირად
        ვთავაზობთ ჩვენს მომხმარებლებს ახალ სერვისებს, რომლებიც მათი მოთხოვნების
        შესაბამისად დგება და ყალიბდება როგორც ახალი ჯგუფური, ან ინდივიდუალური
        ტრეინინგი. თუ თვლით, რომ საჭიროა კიდევ ახალი სერვისის დამატება, ჩვენ
        მზად ვართ მოვისმინოთ თქვენი აზრი და მაქსიმალურად გავითვალისწინოთ :)
      </p>
      <div className="card__wrapper">
      <Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
            <Card color="#FFE6D4" header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს, ხოლო თქვენს როლს სხვა ადამიანი იკავებს."/>
            <Card color="#E0ECFF" header="ქოუჩინგი" subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. "/>
            <Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
            <Card color="#FFE6D4" header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს, ხოლო თქვენს როლს სხვა ადამიანი იკავებს."/>
            <Card color="#E0ECFF" header="ქოუჩინგი" subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. "/>
            <Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
            <Card color="#FFE6D4" header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს, ხოლო თქვენს როლს სხვა ადამიანი იკავებს."/>
            <Card color="#E0ECFF" header="ქოუჩინგი" subtitle="ქოუჩინგი დღევანდელ დღეს საკმაოდ პოპულარული და მოთხოვნადი პროდუქტია. თუმცა, ცოტამ თუ იცის სინამდვილეში მისი შინაარსის და დანიშნულების შესახებ. "/>
            <Card color="#EFECFF" header="თეატრ თერაპია" subtitle="მოირგე როლი, რომელიც შენთვის საინტერესოა, გაცვალე ემოციები ჯგუფის წევრებთან და გათავისუფლდი დაგროვილი, შეკავებული ენერგიისგან."/>
            <Card color="#FFE6D4" header="სისტემური განლაგება " subtitle="ერთ-ერთი ყველაზე მოთხოვნადი და საინტერეო ჯგუფური ტრენინგი, რომელიც საშუალებას გაძლევთ შორიდან დააკვირდეთ საკუთარ თავს, ხოლო თქვენს როლს სხვა ადამიანი იკავებს."/>
            
      </div>
    </ServicesContainer>
  );
};
const ServicesContainer = styled.div`
  padding: 165px 247px 299px;
  .services__title,
  .services__subtitle {
    text-align: center;
    width: 1429px;
  }
  .services__subtitle {
    color: #938fa9;
    font-size: 20px;
    font-family: FiraGO;
    font-weight: 400;
    line-height: 30px;
    word-wrap: break-word;
    margin-top: 30px;
  }
  .services__title {
    color: #032d60;
    font-size: 56px;
    font-family: FiraGO;
    font-weight: 500;
    line-height: 64px;
    word-wrap: break-word;
  }
  .card__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 5rem;
  }
`;
export default Services;