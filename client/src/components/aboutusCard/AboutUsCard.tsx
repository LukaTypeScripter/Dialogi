

interface Props {
    title: string
    img: string
    subtitle:string
}
const AboutUsCard = ({title,img,subtitle}:Props) => {
  return (
    <div className="card">
                <div className="icon__wrapper">
                <img src={img} alt={img} />
                </div> 
                <h1 className="card__title">{title}</h1>
                <p className="card__subtitle">{subtitle}</p>   

    </div>
  )
}

export default AboutUsCard