import React from 'react'
import CrumbStyle from './BreadCrumbs.module.css'
import heartIcon from '../../images/heartIcon.png'
import { Link } from 'react-router-dom'
// import bookService from '../../images/'

const Breadcrumbs = () => {
  return (
    <div className={CrumbStyle.CrumbsDiv}>
      <div className={CrumbStyle.linkDiv}>
       
        <Link to='/' >Home</Link>
        <Link to='/books' >Books</Link>
        <Link to='/sciencefiction' >Science Fiction</Link>
        <p>Cart</p>
         </div>
    </div>
  )
}

export default Breadcrumbs
