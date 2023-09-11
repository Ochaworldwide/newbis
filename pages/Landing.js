import React from 'react'
import Booklist from '../components/Booklist'
import Journalbook from '../components/Journalbook'
import Search from '../components/Search'
import icon1 from  '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {

  return (
    <section>
      <div className="welcome">
        <div className="welcomeimg"></div>
        <div className="welcome-gen">
          <div className="knowledge">
            <div className='gainshare'>
              <h2>GAIN</h2>
              <h2>SHARE</h2>
            </div>
            <h1 className='knowledgew'>KNOWLEDGE</h1>
           
          </div>
            <p>
              A Large Collection Of Books, Journals, Articles And Resources
              To Suit Your Reading Needs 
            </p>
          <Search></Search>
        </div>      
      </div>
      {/* End of welcome section */}
      <div className="best-options">
          <div className="best-quality">
            <span><img src={icon1} alt="" /></span> <p>Large Collection</p>
          </div>
          <div className="best-quality">
          <span><img src={icon2} alt="" /></span> <p>Simple, Secure Payment</p> 
            </div>
          <div className="best-quality">
          <span><img src={icon3} alt="" /></span> <p>Best Quality Materials</p>
          </div>
    
      </div>
      <div className="booklist">
        <h3>Best Selling Books</h3>
        <Booklist />

        <h3>Editors Picks</h3>
        <Booklist />

        <h3>Top Journals</h3>
        <Journalbook />
      </div>
      <div className="intoworld">
        <h1 id='dive'>Dive into the World of Warm Books</h1>
        <button>Explore Book Library     <FontAwesomeIcon icon={faArrowCircleRight } className="arrow-right"/></button>
      </div>
    </section>
  )
}

export default Landing