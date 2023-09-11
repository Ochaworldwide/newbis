import React from 'react'
import Filter from '../components/filter'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import Booksame from '../components/booksame'

const Category = () => {
  return (
    <section>
      <div className="bookswel">
        <h1>Science</h1>
        <Search></Search>
      </div>
      <div className="bookgen">
        <Filter></Filter>
        <div className="otherbooks">
          <div className="bookhome">
            <Link to="/" className='booklink'>Home   &gt;</Link>
            <Link to="/books" className='booklink booklinkspace'>Books   &gt;</Link>
            <Link to="/category"className='booklinkb'>Science</Link>
          </div>
         <div className="spacesame"></div>
          <Booksame />
          <div className="spacesame"></div>
          <Booksame />
          <div className="spacesame"></div>
          <Booksame />
          <div className="spacesame"></div>
          <Booksame />
          <div className="spacesame"></div>

          <div className="searchresult">
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

export default Category