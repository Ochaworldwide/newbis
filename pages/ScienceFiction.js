import React from "react";
import AuthorInformation from "../components/AuthorInformation";
import BookChart from "../components/BookChart";
import Books from "../components/Books";
import Description from "../components/Description";
import { Link } from "react-router-dom";



const ScienceFiction = () => {

    

    return ( 
        <div className="science-page">

            <div className="book-direction">
                <Link to="/" className='book-dic-link'>Home </Link>
                &gt;
                <Link to="/books"className='book-dic-link'>Books</Link>
                &gt;
                <Link to="/sciencefiction"className='book-dic-link active-path' >Science Fiction</Link>
            </div>


            <BookChart />

            <AuthorInformation />

            <Description />


            <div className="more-books-option">
                <h5>More Science fiction books</h5>

                <h5 className="more-books-text">More</h5>
            </div>


            <Books />


        




        </div>




     );
}
 
export default ScienceFiction;