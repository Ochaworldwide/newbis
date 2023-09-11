import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Email2 = () => {
    const facheck =<FontAwesomeIcon icon={faCheck} className="check-email" /> ;
    return(
        <div className="email2-container">
            <div className="email2Overlay"></div>
            
            
            <div className="email2-content">
                <div className="email-icon1">
                    {facheck}
                </div>
                <div className="email2-p">
                    <p className="emailVer1">Email verification succesful</p>
                    <p className="emailVer2">
                        You have been successfully verified. You will be redirected automatically to home page to compete sign up or click  <a className="email2-link" href="/">here</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Email2