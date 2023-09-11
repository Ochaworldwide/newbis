import React from "react";
import logo from '../images/logo.svg';



const Email = () => {
    return(
    <div className="email-container">
    <div className="email1-Overlay"></div>
        <div className="email-content">
            <div className="email-l">
                <h3 className="email-warm">
                    WarmBooks
                </h3>

                    <div className='email-img'><img src={logo} alt="" /></div>
            </div>

            <p className="email-code">Code sent to email</p>

            <div className="email-p">
                <p className="sampling">
                    A verification email has been sent 
                    to reader@gmail.com. check your email to complete
                    verification or click  <a className="email-link" href="/">here</a> 

                </p>

            </div>

        </div>
    </div>
    )
}

export default Email