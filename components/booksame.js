import review from '../images/book2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Rating from './Rating'

const Booksame = () => {

  const star =<FontAwesomeIcon icon={faStar} className="star" /> ;

  const love = <FontAwesomeIcon icon={faHeart} className="favorite1" />

  const [color, setColor] = useState("#ffffff")

  const click = () =>{
    if(color="#ffffff"){
      document.getElementsByClassName('favorite1').color="#810EA7"
    }
  }
  
  return ( 
          <div  className="bookline">
          
          <div className="eachbook">
            <Link to="/sciencefiction" > <img src={review} alt="" />  </Link>
            
            <div className="second-book secondbookedit" >
              <h3>The ReMilk And Honey</h3>
              <p>Mildred Mortneyy</p>
              <div className="icon-star">
              <Rating />   
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </div>

          <div className="eachbook">
            <Link to="/sciencefiction" > <img src={review} alt="" />  </Link>
            
            <div className="second-book secondbookedit" >
              <h3>The ReMilk And Honey</h3>
              <p>Mildred Mortneyy</p>
              <div className="icon-star">
              <Rating />   
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </div>
          <Link to="/sciencefiction" className="eachbook">
            <img src={review} alt="" />
            <div className="second-book secondbookedit" >
              <h3>The ReMilk And Honey</h3>
              <p>Mildred Mortneyy</p>
              <div className="icon-star">
              <Rating />   
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </Link>
          <Link to="/sciencefiction" className="eachbook">
            <img src={review} alt="" />
            <div className="second-book secondbookedit" >
              <h3>The ReMilk And Honey</h3>
              <p>Mildred Mortneyy</p>
              <div className="icon-star">
              <Rating />   
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </Link>
          
        </div>
        
     );
}
 
export default Booksame;