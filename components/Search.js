import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Search = () => {

    return ( 
       
            <div className="search">
                <FontAwesomeIcon icon={faSearch} className="fasearch"/>
             
                <form action="" className="welcome-form">
                    <input type="text" placeholder="Search For A Book" />
                    <button>Search <FontAwesomeIcon icon={faArrowCircleRight } className="arrow-right"/></button>
                </form>
                
            </div>

     );
}
 
export default Search;