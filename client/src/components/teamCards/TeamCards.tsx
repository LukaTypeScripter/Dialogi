import { BtnBook } from "../rates/Rates"


interface Props {
    title: string
    subtitle: string
    img:string
}
const TeamCards = ({title,subtitle,img}:Props) => {
  return (
    <div className="relative">
    <div className="team__wrapper">
      <img src={img} alt="" className='team__img'/>
      <div className="blur__bg">
        <h1 className="blur__title">{title}</h1>
        <p className="blur__subtitle">{subtitle}</p>
        <div className="blur__btn_wrapper">
          <BtnBook>დაჯავშნა</BtnBook>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamCards