import React from 'react';
import './Cart.css'

const Cart = (props) => {
      const cart=props.cart;
      const totalDollar=cart.reduce((total,prd)=>total+prd.price, 0)
      let tax =0
      if(totalDollar>100){
         tax=5;   
      }
      else if(totalDollar>200){
            tax=10;
      }
      else if(totalDollar>500){
            tax=50;
      }
      else{
            tax=0
      }
      return (
            <div className="cart">
                <h4>order summary </h4>
                <h5>items order:{cart.length}</h5>
                <h6>tax+ vat={tax}</h6>
                <h5>total price: {totalDollar+tax}</h5>
                


            </div>
      );
};

export default Cart;