
import styled from 'styled-components'
interface Props {
    img?: string
    title:string
    subtext:string
}
const ServicesCard = ({img,title,subtext}:Props) => {
  return (
    <ServicesCards>
        <img src={img} alt="" />
        <div className='wrapper__texts'>
        <h2 className='service__card__title'>{title}</h2>
        <p className='service__card__subtext'>{subtext}</p>
        </div>
        
    </ServicesCards>
  )
}
const ServicesCards = styled.div`
    max-width: 378px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.10); 
    border-radius: 20px;
    img {
        width: 100%;
        object-fit: cover;
    }
    .service__card__title {
        color: #473F47;
font-size: 18px;
font-family: FiraGO;
font-weight: 500;
line-height: 20px;
word-wrap: break-word;
    }
.service__card__subtext {
    color: #939FB1;
font-size: 15px;
font-family: FiraGO;
font-weight: 400;
line-height: 20px;
word-wrap: break-word;
margin-top: 22px;
margin-bottom: 33px;
}
    .wrapper__texts {
        margin: 30px 20px 0 20px;
    }
`
export default ServicesCard