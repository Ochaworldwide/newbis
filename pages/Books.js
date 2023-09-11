import React from 'react'
import Filter from '../components/filter'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import Booksame from '../components/booksame'

const Books = () => {
  return (
    <section>
      <div className="bookswel">
        <h1>Books</h1>
        <Search></Search>
      </div>
      <div className="bookgen">
        <Filter></Filter>
        <div className="otherbooks">
          <div className="bookhome">
            <Link to="/" className='booklink'>Home   &gt; </Link>
            <Link to="/books"className='booklinkb'>Books</Link>
          </div>
          <div className="booktit">
            <p>Science</p>
            <Link to='/category'>More</Link>
          </div>
          <Booksame />
          <div className="booktit">
            <p>Tech</p>
            <Link to=''>More</Link>
          </div>
          <Booksame />
          <div className="booktit">
            <p>Health</p>
            <Link to=''>More</Link>
          </div>
          <Booksame />
          <div className="booktit">
            <p>Religion</p>
            <Link to=''>More</Link>
          </div>
          <Booksame /> 
          <div className="searchresult moreresult">
            <p>More Results:</p>
            <button>&lt;</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>&gt;</button>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Books