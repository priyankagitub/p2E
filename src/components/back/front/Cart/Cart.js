import React from 'react'
import "./Cart.css";


const Cart = ({cartItems ,handleAddProduct ,handleRemoveProduct ,handleCartClearance})=> {

  const totalprice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0);
  return (
    <div className="cart-items">
      <h2 className="cart-items-header"> cart items </h2>

      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
            )}
      </div>


      {cartItems.length === 0 && ( 
    <div className="cart-items-empty"> No items  are Added in cart </div>)}

    {cartItems.map((item)=>(
      <div key={item.id} className="cart-items-list">
        <img  className="cart-items-image"
         src={item.image}
        alt={item.name}/>

        <div className="cart-items-name">{item.name}</div>
        <div className="cart-items-function">
            <button className="cart-items-add" onClick={()=>handleAddProduct(item)}> + </button>
            <button className="cart-items-remove" onClick={()=>handleRemoveProduct(item)}> - </button>
        </div>
        <div className="cart-items-price">
          {item.quantity} * ${item.price}
        </div>
      </div>
      

    ))}

      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">
          ${totalprice}

        </div>

      </div>
      
    </div>
   
    
  );
};


export default Cart;



// import React, { useState, useEffect } from "react";
// import "./Cart.css";

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);

//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//     handlePrice();
//   };

//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.amount * item.price));
//     setPrice(ans);
//   };

//   useEffect(() => {
//     handlePrice();
//   });

//   return (
//     <article>
//       {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.img} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </article>
//   );
// };

// export default Cart;

