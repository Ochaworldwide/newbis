import React from 'react'
import Cart1Style from './Cart1.module.css'
import CartImage from '../../images/Cart image.svg'
import loveIcon from '../../images/loveIcon.svg'

const Cart1 = () => {
  return (
    <div className={Cart1Style.cart1Div}>

        <div>
          <img src={CartImage} alt="cartImage" className={Cart1Style.Cart1Img}/>
        </div>
        
        <div className={Cart1Style.WarDiv}>
          <p className={Cart1Style.WarP}>Intergalactic War of The Tidal</p>
          <p>Mark Zugerbeck</p>
        </div>

        <div className={Cart1Style.loveIconDiv}>
          <img src={loveIcon} alt="loveIcon" />
          <p>Add to Wishlist</p>
        </div>

        <div>
          <p className={Cart1Style.NairaSign}>
            <s>N</s> 3,400
          </p>
        </div>
        
        <button className={Cart1Style.button}>
          Remove
        </button>
    </div>
  )
}

export default Cart1
