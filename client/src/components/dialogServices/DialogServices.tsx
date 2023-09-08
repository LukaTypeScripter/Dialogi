
import useMediaQuery from '../../Hooks/useMediaQuery';
import { cheveronLeftBlue, cheveronRigthBlue } from '../../assets'
import Card from '../card/Card'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from '../../slices/authSlice';
import { useFetchDataMutation } from '../../slices/usersApiSLice';
import { Data } from '../../dataTypes';
const DialogServices = () => {
  const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  const [fetchData, { data, isLoading }] = useFetchDataMutation();

  const { userInfo } = useSelector((state: { auth: AuthState }) => state.auth);
  useEffect(() => {
    fetchData()
  },[userInfo])

  const documents = data?.documents;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  console.log(data);
  
  if (data) {
    console.log('Fetched data:', data);
  }
  const settingsSmallScreen = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div style={{width:'54px',height:'54px',}}>
      <img src={cheveronLeftBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
    </div>
    ),
    nextArrow: (
      <div style={{width:'54px',height:'54px',}}>
            <img src={cheveronRigthBlue} style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}} />
          </div>
    ),
  };
  const settingsBigScreen = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div style={{width:'54px',height:'54px',}}>
      <img src={cheveronLeftBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
    </div>
    ),
    nextArrow: (
      <div style={{width:'54px',height:'54px',}}>
            <img src={cheveronRigthBlue} alt="" style={{padding:'12px',border:"1px #032D60 solid",borderRadius:'7px'}}/>
          </div>
    ),
  };
  return (
   <>

          

          {/**cards */}
          
          {isAboveTabletScreens ? (
            <Slider {...settingsSmallScreen}>
              {documents?.map((document: Data) =>
                document.sections.map((section, sectionIndex) =>
                  section.contents.map((content, contentIndex) => (
                    <>
                    <Card
                      key={contentIndex}
                      header={content.title}
                      color={content.color}
                      subtitle={content.subtitle}
                    />
                    </>
                  
                  ))
                )
              )}
            </Slider>
          ) : (
            <Slider {...settingsBigScreen}>
              {documents?.map((document: Data) =>
                document.sections.map((section, sectionIndex) =>
                  section.contents.map((content, contentIndex) => (
                    <Card
                      key={contentIndex}
                      header={content.title}
                      color={content.color}
                      subtitle={content.subtitle}
                    />
                  ))
                )
              )}
            </Slider>
          )}
           


      
      
   </>
  )
}

export default DialogServices