import review from '../images/revew.png'
import bookimg from '../images/bok.png'
import book1 from '../images/book1.png'
import book3 from '../images/book3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-regular-svg-icons'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Booklist = () => {


  const love = <FontAwesomeIcon icon={faHeart} className="favorite1" />
    return ( 

        <div className="bookline">
          <Link to="" className="eachbook">
            <img src={review} alt="" />
            <div className="second-book">
              <h3>The Revival</h3>
              <p>Morris Johnson</p>
              <div className="icon-star">
                       <Rating />
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </Link>

          <Link to="" className="eachbook">
            <img src={bookimg} alt="" />
            <div className="second-book">
              <h3>The Revival</h3>
              <p>Morris Johnson</p>
              <div className="icon-star">
                       <Rating />
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </Link>

          <Link to="" className="eachbook">
            <img src={book1} alt="" />
            <div className="second-book">
              <h3>The Revival</h3>
              <p>Morris Johnson</p>
              <div className="icon-star">
                        <Rating />
              </div>
              <div className="amount-icon">
                <h3>23,400</h3> {love}
              </div>
            </div>
          </Link>

          <Link to="" className="eachbook">
            <img src={book3} alt="" />
            <div className="second-book">
              <h3>The Revival</h3>
              <p>Morris Johnson</p>
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
 
export default Booklist;