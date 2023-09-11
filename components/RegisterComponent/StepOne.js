import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import upload from '../../images/upload.png';
import Style from './StepOne.module.css'
const StepOne = ({change}) => {
    const [file,setFile] = useState('')
    const imageRef = useRef({})
    const selectImage = (e) =>{
        setFile(e.target.files[0])
    }
    const uploadImg = (e) =>{
        e.preventDefault()
        imageRef.current.click();
    }
  return (
    <div className={Style.main}>
        <div className={Style.steps}>
            <h3>Step 1</h3>
            <p>Personal Information</p>
            <p>Set up your account details in less than five minutes</p>
        </div>
        <div className={Style.stepone}>
            {/* image */}
            <div className={Style.hide}>
                <input type="file" ref={imageRef} onChange={selectImage}/>
                <label htmlFor="file" name='file'>Select Avatar</label>
            </div>
            <div className={Style.upload}>
                <button onClick={uploadImg}>
                    <img src={ upload} alt="upload" className={Style.img} />
                </button>
                <p>Select Avatar</p>
            </div>
            {/* first form */}
            <div className={Style.grid}>
                <input type="text" placeholder='Favour Udoh'/>
                <input type="email" placeholder='favudoh@gmail.com'/>
            </div>
            {/* second form */}
            <div className={Style.grid}>
                <input type="text" placeholder='Favour Udoh' className={Style.input}/>
                <input type="email" placeholder='favudoh@gmail.com'/>
            </div>
        </div>
        <div className={Style.footer}>
            <Link to={'/login'}>Back to login</Link>
            <button onClick={(e)=>change(e,2)}>Next</button>
        </div>
    </div>
  )
}

export default StepOne