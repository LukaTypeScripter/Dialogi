import styled from "styled-components";
import Button from "../../components/Button/Button";
import useMediaQuery from "../../Hooks/useMediaQuery";

const Contact = () => {
    const isAboveTabletScreens = useMediaQuery("(max-width:685px)");
  return (
    <ContactContainer>
      <h1 className="contact__title">კონტაქტი</h1>
      <div className="contact__main">
        <div className="contact__info">
          <p className="contact__info__title">დაგვიკავშირდით</p>
          <p className="contact__info__subtitle">ჩინფორმაცია ჩვენს შესახებ</p>

          <div className="inside__wrapper">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/location">
                <g id="location">
                  <path
                    id="Vector"
                    d="M14.0001 15.6683C16.0104 15.6683 17.6401 14.0386 17.6401 12.0283C17.6401 10.018 16.0104 8.38831 14.0001 8.38831C11.9898 8.38831 10.3601 10.018 10.3601 12.0283C10.3601 14.0386 11.9898 15.6683 14.0001 15.6683Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_2"
                    d="M4.2234 9.90504C6.52173 -0.19829 21.4901 -0.186623 23.7767 9.91671C25.1184 15.8434 21.4317 20.86 18.2001 23.9634C15.8551 26.2267 12.1451 26.2267 9.7884 23.9634C6.5684 20.86 2.88173 15.8317 4.2234 9.90504Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <div>
              <div className="title">გვეწვიეთ მისამართზე</div>
              <div className="subtitle">თბილისი, კეკელიძის ქ, 32ა</div>
            </div>
          </div>

          <div className="inside__wrapper">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/location">
                <g id="location">
                  <path
                    id="Vector"
                    d="M14.0001 15.6683C16.0104 15.6683 17.6401 14.0386 17.6401 12.0283C17.6401 10.018 16.0104 8.38831 14.0001 8.38831C11.9898 8.38831 10.3601 10.018 10.3601 12.0283C10.3601 14.0386 11.9898 15.6683 14.0001 15.6683Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_2"
                    d="M4.2234 9.90504C6.52173 -0.19829 21.4901 -0.186623 23.7767 9.91671C25.1184 15.8434 21.4317 20.86 18.2001 23.9634C15.8551 26.2267 12.1451 26.2267 9.7884 23.9634C6.5684 20.86 2.88173 15.8317 4.2234 9.90504Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <div>
              <div className="title">გვეწვიეთ მისამართზე</div>
              <div className="subtitle">თბილისი, კეკელიძის ქ, 32ა</div>
            </div>
          </div>

          <div className="inside__wrapper">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/location">
                <g id="location">
                  <path
                    id="Vector"
                    d="M14.0001 15.6683C16.0104 15.6683 17.6401 14.0386 17.6401 12.0283C17.6401 10.018 16.0104 8.38831 14.0001 8.38831C11.9898 8.38831 10.3601 10.018 10.3601 12.0283C10.3601 14.0386 11.9898 15.6683 14.0001 15.6683Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_2"
                    d="M4.2234 9.90504C6.52173 -0.19829 21.4901 -0.186623 23.7767 9.91671C25.1184 15.8434 21.4317 20.86 18.2001 23.9634C15.8551 26.2267 12.1451 26.2267 9.7884 23.9634C6.5684 20.86 2.88173 15.8317 4.2234 9.90504Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <div>
              <div className="title">გვეწვიეთ მისამართზე</div>
              <div className="subtitle">თბილისი, კეკელიძის ქ, 32ა</div>
            </div>
          </div>
          <div className="social__wrapper">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/facebook">
                <g id="facebook">
                  <path
                    id="Vector"
                    d="M16.3333 10.85V14.2333H19.3667C19.6 14.2333 19.7167 14.4667 19.7167 14.7L19.25 16.9167C19.25 17.0333 19.0167 17.15 18.9 17.15H16.3333V25.6667H12.8333V17.2667H10.85C10.6167 17.2667 10.5 17.15 10.5 16.9167V14.7C10.5 14.4667 10.6167 14.35 10.85 14.35H12.8333V10.5C12.8333 8.51667 14.35 7 16.3333 7H19.4833C19.7167 7 19.8333 7.11667 19.8333 7.35V10.15C19.8333 10.3833 19.7167 10.5 19.4833 10.5H16.6833C16.45 10.5 16.3333 10.6167 16.3333 10.85Z"
                    stroke="#B9B3D9"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector_2"
                    d="M17.4999 25.6666H10.4999C4.66659 25.6666 2.33325 23.3333 2.33325 17.5V10.5C2.33325 4.66665 4.66659 2.33331 10.4999 2.33331H17.4999C23.3333 2.33331 25.6666 4.66665 25.6666 10.5V17.5C25.6666 23.3333 23.3333 25.6666 17.4999 25.6666Z"
                    stroke="#B9B3D9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/linear/instagram">
                <g id="instagram">
                  <path
                    id="Vector"
                    d="M10.4999 25.6666H17.4999C23.3333 25.6666 25.6666 23.3333 25.6666 17.5V10.5C25.6666 4.66665 23.3333 2.33331 17.4999 2.33331H10.4999C4.66659 2.33331 2.33325 4.66665 2.33325 10.5V17.5C2.33325 23.3333 4.66659 25.6666 10.4999 25.6666Z"
                    stroke="#B9B3D9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M14.0001 18.0834C16.2552 18.0834 18.0834 16.2552 18.0834 14C18.0834 11.7449 16.2552 9.91669 14.0001 9.91669C11.7449 9.91669 9.91675 11.7449 9.91675 14C9.91675 16.2552 11.7449 18.0834 14.0001 18.0834Z"
                    stroke="#B9B3D9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M20.5754 8.16665H20.5889"
                    stroke="#B9B3D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="linkedin-2 1">
                <path
                  id="Vector"
                  d="M18.6667 9.33331C20.5233 9.33331 22.3037 10.0708 23.6165 11.3836C24.9293 12.6963 25.6667 14.4768 25.6667 16.3333V24.5H21.0001V16.3333C21.0001 15.7145 20.7542 15.121 20.3167 14.6834C19.8791 14.2458 19.2856 14 18.6667 14C18.0479 14 17.4544 14.2458 17.0168 14.6834C16.5792 15.121 16.3334 15.7145 16.3334 16.3333V24.5H11.6667V16.3333C11.6667 14.4768 12.4042 12.6963 13.717 11.3836C15.0298 10.0708 16.8102 9.33331 18.6667 9.33331Z"
                  stroke="#B9B3D9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6.99992 10.5H2.33325V24.5H6.99992V10.5Z"
                  stroke="#B9B3D9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M4.66659 6.99998C5.95525 6.99998 6.99992 5.95531 6.99992 4.66665C6.99992 3.37798 5.95525 2.33331 4.66659 2.33331C3.37792 2.33331 2.33325 3.37798 2.33325 4.66665C2.33325 5.95531 3.37792 6.99998 4.66659 6.99998Z"
                  stroke="#B9B3D9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="contact__inputs">
          <div className="name__surname__Wrapper">
            <input type="text" className="name" placeholder="სახელი, გარი" />
            <input type="text" placeholder="სახელი, გარი" className="name" />
          </div>
          <input type="text" className="title" placeholder="სათაური" />
          <textarea
            className="title__textarea"
            placeholder="სათაური"
          ></textarea>
          <SubmitContactBtn>გაგზავნა</SubmitContactBtn>
        </div>
      </div>
      {!isAboveTabletScreens && (
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743.8141768495844!2d44.780543078058535!3d41.77968097001369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d63e8ee6db7%3A0x64220acb806119c5!2sWEBAPP!5e0!3m2!1ska!2sge!4v1692883029136!5m2!1ska!2sge"
        width="600"
        height="450"
        style={{ border: "0" }}
    
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> 
      )}
     
    </ContactContainer>
  );
};
const SubmitContactBtn = styled(Button)`
  width: 100%;
  padding-top: 22px;
  padding-bottom: 22px;
  background-color: #911dc4;
  color: white;
  font-size: 18px;
  font-family: FiraGO;
  font-weight: 500;
  line-height: 26.5px;
  word-wrap: break-word;
  outline: none;
  border: none;
  margin-top: 30px;
`;
const ContactContainer = styled.div`
  
  .contact__title {
    padding: 10.125rem 0 5rem 0;
    text-align: center;
    color: #032d60;
    font-size: 56px;
    font-family: FiraGO;
    font-weight: 500;
    line-height: 64px;
    word-wrap: break-word;
  }
  .contact__main {
    display: flex;
    background-color: #330a45;
    margin-bottom: 5rem;
    padding: 50px 246px;
  }
  .contact__info__title {
    color: white;
    font-size: 24px;
    font-family: FiraGO;
    font-weight: 600;
    line-height: 21px;
    word-wrap: break-word;
  }
  .inside__wrapper {
    display: flex;
    gap: 22px;
    margin-top: 30px;
    .title {
      color: white;
      font-size: 20px;
      font-family: FiraGO;
      font-weight: 500;
      line-height: 30px;
      word-wrap: break-word;
      width: 286px;
    }
    svg {
      margin-top: 30px;
      width: 28px;
      height: 28px;
    }
    .subtitle {
      color: #b9b3d9;
      font-size: 18px;
      font-family: FiraGO;
      font-weight: 400;
      line-height: 30px;
      word-wrap: break-word;
    }
  }
  .contact__info__subtitle {
    color: #b9b3d9;
    font-size: 20px;
    font-family: FiraGO;
    font-weight: 400;
    line-height: 30px;
    word-wrap: break-word;
    width: 100%;
  }
  .social__wrapper {
    display: flex;
    gap: 25px;
    margin-top: 82px;
  }
  .contact__inputs {
    margin-left: 290px;
    input,
    .title__textarea {
      border: 0.5px rgba(195, 205, 221, 0.3) solid;
      border-radius: 10px;
      background: #fdfdfd;
      padding-top: 27px;
      padding-bottom: 28px;
      padding-right: 280px;
      padding-left: 20px;
      width: 100%;
    }
    input::placeholder,
    .title__textarea::placeholder {
      color: rgba(2, 36, 77, 0.5);
      font-size: 16px;
      font-family: FiraGO;
      font-weight: 400;
      word-wrap: break-word;
    }
  }

  .name__surname__Wrapper {
    display: flex;

      gap: 30px;
    
  }

  .title,
  .title__textarea {
    width: 100%;
    margin-top: 30px;
  }

  .title__textarea {
    height: 178px;
  }
  iframe {
    margin: 80px 246px 100px;
    width: 1428px;
    height:652px;
  }
  @media only screen and (max-width: 90rem) {
    .contact__main {
      padding: 50px 40px;
    }
    .contact__info {
      width: 355px;
    }
 
  }
  @media only screen and (max-width: 43.3rem) {
    .name__surname__Wrapper,.contact__main {
      flex-direction: column;
     
    }
    .contact__inputs {
      margin-left: 0;
      margin-top: 71px;
    }
    .title {
      width: 100% !important;
    }
   
  }
`;
export default Contact;
