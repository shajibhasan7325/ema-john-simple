import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
      const fasts10=fakeData.slice(0,10)
      const [products, setProducts]=useState(fasts10);
      const [cart, setCart]=useState([ ]);
      const handleAddProduct=(product)=>{
            console.log("product add", product )
            const newCart=[...cart, product];
            setCart(newCart);
      }
     
      return (
<div className="container">
<div className="shop-container">
{
      products.map(pd=><Product 
            handleAddProduct={handleAddProduct}
      product={pd}></Product>)
}
</div>
<div className="cart-container">
<Cart cart={cart}></Cart>
</div>
  
</div>
      );
};

export default Shop;