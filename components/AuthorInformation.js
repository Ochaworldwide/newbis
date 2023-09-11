import React from "react";
import { Link } from "react-router-dom";

const AuthorInformation = () => {
    return ( 
        <div>
            <div className="profile-box">

                <div className="small-box">
                    <div className="profile-part-1">

                        <h2>Author Information</h2>

                        <div className="profile-card">
                            <div className="profile-part-img"></div>

                            <div className="profile-texts">
                                <h2>Mathew Aniekan</h2>

                                <p>Uyo, Nigeria</p>
                            </div>
                        </div>

                        

                    </div>

                    <div className="profile-part-2">

                        <button className="contact-author-butt">
                            Contact Author
                        </button>

                        <Link to="/authorprofile" className="author-profile-butt">
                            Author's Profile
                        </Link>

                    </div>
                </div>

                

            </div>
        </div>
     );
}
 
export default AuthorInformation;