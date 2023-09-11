import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ReviewSummary = () => {
const star =<FontAwesomeIcon icon={faStar} className="star big-star" /> ;

    return ( 
        <div className="review-summary-box">

            <p>Rating Summary</p>

            <div className="rating">
                {star}
                {star}
                {star}
                {star}
                {star}

                
            </div> 

            <p>4.0 out of 5</p>

            <button className="write-review">
                Write a Review
            </button>

        </div>
     );
}
 
export default ReviewSummary;