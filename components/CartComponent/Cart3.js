import React from 'react'
import firstBank from'../../images/firstBank.svg'
import Cart3Style from './Cart3.module.css'
import arrow from '../../images/ARROWdown.svg'


const Cart3 = () => {

  return (
    
      <div className={Cart3Style.Cart3Container}>

        <p className={Cart3Style.firstP}>Card Details</p>

        <div className={Cart3Style.bankDiv}>
            <div className={Cart3Style.bankContent}>
                <img src={firstBank} alt="firstBank" />
                <p>FIRST BANK OF NIGERIA</p>
            </div>
            <img src={arrow} alt="" className={Cart3Style.bankArrow}/>
        </div>

        {/* <select name="" id="" className={Cart3Style.cardType}>
            <option value="" disabled selected hidden >select card type</option>
        </select> */}

         <div className={Cart3Style.arrowDiv}>
            <select placeholder='select card type' type="text" >
                <option value="Visa Card">Visa Card</option>
                <option value="Master Card">Master Card</option>
                <option value="Verve Card">Verve Card</option>
                {/* <img src={arrow} alt="" /> */}
            </select>
        </div>

       
            <input type="number" placeholder='Input card number' className={Cart3Style.inputCard}/>
            <input type="number" placeholder='Input CVV'  className={Cart3Style.inputCard}/>            
        
        <div className={Cart3Style.ExpiryDiv}>
            <p className={Cart3Style.ExpiryP}>Expiry Date</p>

            <div className={Cart3Style.emptyDivContainer}>
                <input type="number" className={Cart3Style.emptyDiv}/>
                    <p>/</p>
                <input  type="number" className={Cart3Style.emptyDiv}/>
            </div>
        
        </div>
        
        <div className={Cart3Style.TotalDiv}>
            <p>Total:</p>
            <p className={Cart3Style.NairaSign}><s>N</s>13,600</p>
        </div>

        <button className={Cart3Style.button}>
            Pay now
        </button>

      </div>
    
  )
}

export default Cart3
