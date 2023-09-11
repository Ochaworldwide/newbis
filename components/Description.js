import React from "react";
import MiniCategory from "./MniCategory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewSummary from "./ReviewSummary";
import { useState } from "react";

const Description = () => {

    const star =<FontAwesomeIcon icon={faStar} className="star" /> ;

    const [isReview, setIsReview] = useState(true);

    const handleDescription = () => {
        setIsReview(true);
        let des=document.getElementById("active-des");
        let rev=document.getElementById("active-rev")
        des.style.color="#810EA7";
        des.style.borderBottom= "thin solid #810EA7"
        rev.style.color="#8B96A5";
        rev.style.border= "none"
        
    };

    const handleReview = () => {
        setIsReview(false)
        let des=document.getElementById("active-des");
        let rev=document.getElementById("active-rev")
        des.style.color="#8B96A5";
        des.style.border= "none"
        rev.style.color="#810EA7";
        rev.style.borderBottom= "thin solid #810EA7"

    };

    
        
   

    const check = <FontAwesomeIcon icon={faCheck} className="check-sign"/>;

    return ( 
        <div className="description">

            <div className="main-description-box">
                <div className="description-box-header">
                    <div onClick={handleDescription} className="des-link " id="active-des">
                        Description
                    </div>
                

                    <div className="des-link" id="active-rev" onClick={handleReview}>
                        Reviews
                    </div>
                </div>

                
                {isReview ? (
                    <div className="description-texts">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor 
                    sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. 
                    </p>


                    <MiniCategory />


                    <li>
                        {check}

                        Some great feature name here
                    </li>

                    <li>
                        {check}

                        Lorem ipsum dolor sit amet, consectetur 
                    </li>

                    <li>
                        {check}

                        Duis aute irure dolor in reprehenderit
                    </li>

                    <li>
                        {check}

                        Some great feature name here
                    </li>

                    </div> 
                    ) : (
                    <div className="description-texts">

                    <div className="mega-review-box">

                        <div className="mini-review-box">
                            <div className="mini-review-img">

                            </div>

                            <h2>
                                Idorenyin Thomas
                            </h2>

                            <p>
                                January 19th, 2023
                            </p>

                            <div className="rating">
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}

                                
                            </div> 
                        </div>

                        <p className="descript-review-texts">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum 
                            fringilla porttitor vitae laoreet elit eu sollicitudin 
                            scelerisque egestas. Sagittis vel urna mi egestas. 
                            Adipiscing diam volutpat arcu nibh id cras. Sed varius 
                            tellus neque pharetra tristique pellentesque. Aliquam 
                            fermentum 
                        </p>
                    </div>
                    

                    <div className="mega-review-box">

                        <div className="mini-review-box">
                            <div className="mini-review-img">

                            </div>

                            <h2>
                                Idorenyin Thomas
                            </h2>

                            <p>
                                January 19th, 2023
                            </p>

                            <div className="rating">
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}

                                
                            </div> 
                        </div>

                        <p className="descript-review-texts">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum 
                            fringilla porttitor vitae laoreet elit eu sollicitudin 
                            scelerisque egestas. Sagittis vel urna mi egestas. 
                            Adipiscing diam volutpat arcu nibh id cras. Sed varius 
                            tellus neque pharetra tristique pellentesque. Aliquam 
                            fermentum 
                        </p>
                    </div>

                    <div className="mega-review-box">

                        <div className="mini-review-box">
                            <div className="mini-review-img">

                            </div>

                            <h2>
                                Idorenyin Thomas
                            </h2>

                            <p>
                                January 19th, 2023
                            </p>

                            <div className="rating">
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}

                                
                            </div> 

                        </div>

                        <p className="descript-review-texts">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum 
                            fringilla porttitor vitae laoreet elit eu sollicitudin 
                            scelerisque egestas. Sagittis vel urna mi egestas. 
                            Adipiscing diam volutpat arcu nibh id cras. Sed varius 
                            tellus neque pharetra tristique pellentesque. Aliquam 
                            fermentum 
                        </p>
                    </div>

                    <div className="mega-review-box">

                        <div className="mini-review-box">
                            <div className="mini-review-img">

                            </div>

                            <h2>
                                Idorenyin Thomas
                            </h2>

                            <p>
                                January 19th, 2023
                            </p>

                            <div className="rating">
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}

                                
                            </div> 
                            
                        </div>

                        <p className="descript-review-texts">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum 
                            fringilla porttitor vitae laoreet elit eu sollicitudin 
                            scelerisque egestas. Sagittis vel urna mi egestas. 
                            Adipiscing diam volutpat arcu nibh id cras. Sed varius 
                            tellus neque pharetra tristique pellentesque. Aliquam 
                            fermentum 
                        </p>


                        <div className="more-view">
                            <p>
                                More Review
                            </p>

                            <button className="page-number">
                                &lt;
                            </button>

                            <button className="page-number">
                                1
                            </button>

                            <button className="page-number">
                                2
                            </button>

                            <button className="page-number">
                                3
                            </button>

                            <button className="page-number">
                                4
                            </button>

                            <button className="page-number">
                                &gt;
                            </button>
                        </div>
                    </div>
                    

                   

                    </div>
                )}

                
            </div>

            <ReviewSummary />

        </div>
     );
}
 
export default Description;