import React from 'react'
import Cart2Style from './Cart2.module.css'
import { useState } from 'react';
import Cart3 from './Cart3';

const Cart2 = () => {
    const [isCheck, setIsCheck] = useState(true);

    const handleCheckOut = () => {
        setIsCheck(false);
        // let des=document.getElementById("active-des");
        // let rev=document.getElementById("active-rev")
        // des.style.color="#810EA7";
        // des.style.borderBottom= "thin solid #810EA7"
        // rev.style.color="#8B96A5";
        // rev.style.border= "none"

        console.log("What are you doing")
        
    };

  return (

        isCheck ? (

        
            <div className={Cart2Style.Cart2Container}>
                <div>
                    <p className={Cart2Style.pTag}>Sub Total:</p>
                    <p className={Cart2Style.NairaP}><s>N</s> 13,600</p>
                </div>
                
                <div>
                    <p className={Cart2Style.pTag}>Tax:</p>
                    <p className={Cart2Style.NairaP}><s>N</s>0.00</p>
                </div>
                <hr />
                <div>
                    <p className={Cart2Style.pTag}>Total:</p>
                    <p className={Cart2Style.ColouredNaira}><s>N</s> 13,600</p>
                </div>
                
                <div className={Cart2Style.buttonDiv}>
                    <button onClick={handleCheckOut}>Check out</button>
                </div>    
            </div>
        ):(
            <Cart3 />
        )
  )
}

export default Cart2
