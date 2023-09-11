import Style from './Stepthree.module.css';
import upload from '../../images/upload.png';
const Stepthree = ({change}) => {
  return (
    <div className={Style.main}>
      <div className={Style.steps}>
        <h3>Step 3</h3>
        <p>Preview</p>
        <p>Confirm your account details, if somthing is out of place, you can <span onClick={(e)=>change(e,1)}>Edit</span></p>
      </div>
      <div className={Style.accountdet}>
        <div>
          <img src={upload} alt="upload" />
        </div>
        <div className={Style.griddetails}>
          <h4>Favour Udoh</h4>
          <div className={Style.details}>
            <p>favudoh@gmail.com</p>
            <div className={Style.divide}></div>
            <p>+0000000000</p>
            <div className={Style.divide}></div>
            <p >11yrs</p>
          </div>
        </div>
      </div>
      <div className={Style.interest}>
        <p><b>Interest:</b>  <span>Art, Psychology, History, Mathematics, Science</span></p>
      </div>
      <div className={Style.footer}>
            <p onClick={(e)=>change(e,1)}>Edit</p>
            <button>create account</button>
      </div>
    </div>
  )
}

export default Stepthree