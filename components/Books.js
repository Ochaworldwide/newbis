
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-regular-svg-icons'





const Books = () => {
    const star =<FontAwesomeIcon icon={faStar} className="star" /> ;

    const love = <FontAwesomeIcon icon={faHeart} className="favorite" />

  

    
    
    return ( 
        <div className="book-body">
            <div className="books-details">
                <div className="bookimg"></div>

                <div className="book-infos">

                    <h2>Milk and Honey</h2 >

                    <p>
                        Mildred Mortneyy
                    </p>


                   

                    <div className="rating custom-rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}

                        {love}
                    </div> 

                    <h2>
                        N 23,400
                    </h2>

                </div>

               


            </div>

            
            <div className="books-details">
                <div className="bookimg"></div>

                <div className="book-infos">

                    <h2>Milk and Honey</h2 >

                    <p>
                        Mildred Mortneyy
                    </p>

                    <div className="rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                        {love}
                    </div>

                    <h2>
                        N 23,400
                    </h2>

                </div>

               


            </div>

            <div className="books-details">
                <div className="bookimg"></div>

                <div className="book-infos">

                    <h2>Milk and Honey</h2 >

                    <p>
                        Mildred Mortneyy
                    </p>

                    <div className="rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                        {love}
                    </div>

                    <h2>
                        N 23,400
                    </h2>

                </div>

               


            </div>

            <div className="books-details">
                <div className="bookimg"></div>

                <div className="book-infos">

                    <h2>Milk and Honey</h2 >

                    <p>
                        Mildred Mortneyy
                    </p>

                    <div className="rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                        {love}
                    </div>

                    <h2>
                        N 23,400
                    </h2>

                </div>

               


            </div>


            <div className="books-details">
                <div className="bookimg"></div>

                <div className="book-infos">

                    <h2>Milk and Honey</h2 >

                    <p>
                        Mildred Mortneyy
                    </p>

                    <div className="rating">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                        {love}
                    </div>

                    <h2>
                        N 23,400
                    </h2>

                </div>

               


            </div>






            
        </div>
     );
}
 
export default Books;