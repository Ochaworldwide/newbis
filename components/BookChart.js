import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping , faStar } from '@fortawesome/free-solid-svg-icons';


const BookChart = () => {

    const love = <FontAwesomeIcon icon={faHeart}  />
    const star =<FontAwesomeIcon icon={faStar} className="star" /> ;

    const message = <FontAwesomeIcon icon={faMessage} className="chart-message"/>

    const bag = <FontAwesomeIcon icon={faBagShopping} className ="chart-bag" />
    return ( 
        <div className="book-chart">
            <div className="chart-book-details">
                <div className="chart-book-img"></div>
                <div className="chart-book-info">
                    <h1>Intergalactic War of The Tidal Maroof Zugal Race, A Book</h1>

                    <div className="chart-book-rates">
                    <div className="rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}

                        
                    </div> 

                        <li>
                            {message} 

                            32 reviews
                        </li>

                        <li>
                            {bag} 

                            32 reviews
                        </li>


                    </div>


                    <div className="chart-book-category">
                        <p className="cat-head">Category: </p>

                        <p className="cat-tail">Science Fiction</p>
                    </div>

                    <div className="cat-line"></div>

                    <div className="chart-book-category">
                        <p className="cat-head">Pages:  </p>

                        <p className="cat-tail">233</p>
                    </div>

                    <div className="chart-book-category">
                        <p className="cat-head">Language:  </p>

                        <p className="cat-tail">English</p>
                    </div>

                    <div className="chart-book-category">
                        <p className="cat-head">Publication Date:  </p>

                        <p className="cat-tail">Modern nice</p>
                    </div>

                    <div className="cat-line"></div>

                    <div className="chart-book-category">
                        <p className="cat-head">ISBN No:   </p>

                        <p className="cat-tail">0Xodo4004</p>
                    </div>

                    <div className="chart-book-category">
                        <p className="cat-head">Publisher : </p>

                        <p className="cat-tail">Beacon Press Limited (October 22, 2021)</p>
                    </div>
                   
                </div>

                <div className="chart-book-checkout">
                    <div className="buy-chart">
                        <h1>₦ 3,400</h1>

                        <div className="horizontal-line"></div>

                        <button className="buy"> Buy Now</button>

                        

                        <button className="chart"> Add To chart</button>
                    </div>

                    <p>Add To Wish List  <span className="chartspan">{love}</span> </p>
                </div>
            </div>


            <div className="books-covers">
                <div className="cover">
                    <div className="child-cover" id="cover-1"></div>
                </div>

                <div className="cover">
                    <div className="child-cover" id="cover-2"></div>
                </div>

                <div className="cover">
                    <div className="child-cover" id="cover-3"></div>
                </div>

                <div className="cover">
                    <div className="child-cover" id="cover-4"></div>
                </div>
            </div>
        </div>
     );
}
 
export default BookChart;