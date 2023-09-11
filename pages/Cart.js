import React from 'react';
import CartStyle from '../styles/Cart.module.css'
import Breadcrumbs from '../components/CartComponent/Breadcrumbs';
import Cart1 from '../components/CartComponent/Cart1';
import Cart2 from '../components/CartComponent/Cart2';
import Cart3 from '../components/CartComponent/Cart3';

const Cart = () => {
  return (
    <div className={CartStyle.sectionCart}> 
      <div className={CartStyle.overlay}>
      </div>

       <Breadcrumbs/>

        <div className={CartStyle.CartDisplay}>

          <div className={CartStyle.CartContent}>
            <p>
              No. of items: 4
            </p>
            <Cart1/>
            <hr />
            <Cart1/>
            <hr />
            <Cart1/>
            <hr />
            <Cart1/>
          </div>

          
          <Cart2/>
          

        </div>    
        {/* <div>
          <Cart3/>
        </div> */}
      
    </div>
  )
}

export default Cart
