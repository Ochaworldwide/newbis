import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from "./Rating"

const Filter = () => {
    const star =<FontAwesomeIcon icon={faStar} className="star" /> ;
    return (  
        <section className="bookfilter">
            <h3>Filter</h3>
            <h4>Categories</h4>
            <div className="bookscat">
                <Link to="">Science</Link>
                <Link to="">Technology</Link>
                <Link to="">Health</Link>
                <Link to="">Religion</Link>
                <Link to="">Art</Link>
                <Link to="">Finance</Link>
            </div>
            <h4>Rating</h4>
            <div className="rating-new">
            <div className="icon-star icon-star-new">
                       <Rating />
              </div>
              <div className="icon-star icon-star-new">
                    <Rating />
              </div>
              <div className="icon-star icon-star-new">
                       <Rating />
              </div>
              <div className="icon-star icon-star-new">
                       <Rating />
              </div>
              <div className="icon-star icon-star-new">
                       <Rating />
              </div>
            </div>

        </section>
    );
}
 
export default Filter;