import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
 const [path, setPath] = useState(window.location.pathname)
  useEffect(()=>{
      
     

      const clicker = () => {
       setPath(window.location.pathname)
      }
      window.addEventListener('click', clicker)
      const homeid =    document.getElementById('homeid');
      const artid = document.getElementById('artid');
      const books = document.getElementById('booksid');
      const jornid = document.getElementById('jornid')
      // if(path === '/' || path === '/login' || path === '/login2' || path === '/register'  || path === '/register2'  ){
      //   homeid.style.display('block')
      //   artid.style.display('none');
      //   books.style.display('none');
      //   jornid.style.display('none')
      // }
      // else if(path === '/books' || path === 'category'){
      //   homeid.style.display('none')
      //   artid.style.display('none');
      //   books.style.display('none');
      //   jornid.style.display('none')
      // }
  })

  return (
    <section className="heading-gen">
      <div className='heading'><img src={logo} alt="" /> <h3>warmbooks</h3></div>
      <div className="headlinks">
  
        <NavLink to="/"  className='headlink'><p> Home </p> <div className='homeid'></div></NavLink>
        <NavLink to="/books" className='headlink'><p>Books</p> <div className='homeid'></div></NavLink>
        <NavLink to="/auth" className='headlink'><p>Journals</p> <div className='homeid'></div></NavLink>
        <NavLink to="/art" className='headlink'><p>Articles</p> <div className='homeid'></div></NavLink>
      </div>
      <Link to="/login" className="signin">Sign in</Link>

    </section>
  )
}

export default Header