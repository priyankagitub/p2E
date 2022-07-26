import React from 'react'
import Products from '../Products/Products';
import SignUp from '../SignUp/SignUp';
import Cart from '../Cart/Cart';
import Contact from '../Products/Contact/Contact';
import { Route,  Switch } from "react-router-dom";
   

const Routes =({productItems , cartItems ,handleAddProduct ,handleRemoveProduct ,handleCartClearance}) => {
  return (
    <div>
   <Switch>

   
       <Route  path="/"  exact>
           <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
       </Route>

       <Route path="/ SignUp" component={SignUp} exact>
         <SignUp/>
         </Route>

         
       <Route path="/ Contact" component={Contact} exact>
         <Contact/>
         </Route>

         <Route path="/Cart" component={Cart} exact>
            <Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
             handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}/>
         </Route>

         

   </Switch>
   

    </div>
  );
  
};

export default Routes;