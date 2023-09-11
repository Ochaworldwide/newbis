import Style from '../styles/Register.module.css';
import logo from '../images/regLogo.svg';
// import logo from '../images/WarmBooks.svg';
import { useState } from 'react';
import StepOne from '../components/RegisterComponent/StepOne';
import Steptwo from '../components/RegisterComponent/Steptwo';
import Stepthree from '../components/RegisterComponent/Stepthree';
const Register = () => {
  const [index, setIndex] = useState(1);
  const changeIndex = (e, position) => {
    e.preventDefault();
    setIndex(position)
  }
  const absoluteStyle = {
    width: `${index === 1 ? "33.33%" : index === 2 ? '65%' : '100%'}`,
    borderRadius: `${index === 3 ? '0' : '0 3rem 3rem 0'}`
  }
  return (
    <main className={Style.registerbody}>
      <div className={Style.overlay}></div>
      <div className={Style.logodiv}>
        {/* <h2 className={Style.h2}>WarmBooks</h2> */}
        <img src={logo} alt="logo" className={Style.img} />
      </div>
      <p className={Style.p}>Create new account</p>
      <form className={Style.form}>
        {/* on large screen */}
        <div className={Style.relative}>
          <div className={Style.absolute} style={absoluteStyle}></div>
          <div className={Style.flex}>
            <p className={`${index <= 3 ? Style.white : Style.black}`}><span>1</span>Personal Information</p>
            <p className={`${index >= 2 ? Style.white : Style.black}`}><span>2</span>Interest</p>
            <p className={`${index === 3 ? Style.white : Style.black}`}><span>3</span>Preview details</p>
          </div>
        </div>
        {/* on small screen */}
        <div className={Style.single}>
          {index === 1 ? <p><span>1</span> Personal Information</p> : index === 2 ? <p><span>2</span>Interest</p> : <p><span>3</span>Preview details</p>}
        </div>
        {index === 1 ? <StepOne change={changeIndex} /> : index === 2 ? <Steptwo change={changeIndex} /> : <Stepthree change={changeIndex} />}
      </form>
    </main>
  )
}

export default Register