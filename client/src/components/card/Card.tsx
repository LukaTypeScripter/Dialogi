import styled from "styled-components"
import Button from "../Button/Button"
import { arrowRigth } from "../../assets"
interface Props {
    header:string
    subtitle:string
    color:string
}
const Card = ({header,subtitle,color}:Props) => {
    console.log(header,subtitle,color);
    
  return (
    <CardContainer color={color}>
        <h1 >{header}</h1>
        <p>{subtitle}</p>
        <StartNowBtn>
           <h4 className="btn__text">დაიწყე დღესვე</h4>
            <img src={arrowRigth} alt="" />
        </StartNowBtn>
    </CardContainer>
  )
}
const StartNowBtn = styled(Button)`
    padding: 17px 37px 18px 35.84px;
    background: white;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    outline: none;
    border: none;
    width: 100%;
    margin-top: 30px;
    .btn__text {
        color: #032D60;
font-size: 16px;
font-weight: 700;
line-height: 21px;
word-wrap: break-word
    }
    img {
        margin-left: 10px;
    }
    @media only screen and (max-width: 43.3rem) {
        margin-top: 60px;
    }
`
const CardContainer = styled.div<{color:string}>`
    background-color: ${props => props.color};
    padding: 40px;
    border-radius: 27px;
    max-width: 378px;
    max-height: 350px;
   
    h1 {
        color: #032D60;
font-size: 24px;
font-weight: 700;
line-height: 21px;
word-wrap: break-word;

    }
    p {
        color: #032D60;
font-size: 16px;
font-weight: 400;
line-height: 25.50px;
word-wrap: break-word;
margin-top: 30px;
height: 130px;
    }
    @media only screen and (max-width: 90rem) {
        h1 {
            width: 282px;
        }
        p {
            width: 299px;
            height: 130px;
        }
    }
    @media only screen and (max-width: 43.3rem) {
        padding: 20px;
        max-width: 264px !important;
    }
`
export default Card