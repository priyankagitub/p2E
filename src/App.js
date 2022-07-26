import React,{useState} from 'react'
import data from './components/back/Data/Data'
import Header from './components/back/front/Header/Header';
import Routes from './components/back/front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {

  const{productItems} =data;
  const[cartItems,setCartItems] =useState([]);
 
  const handleAddProduct =(product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ?
      {...ProductExist , quntity: ProductExist.quntity + 1}: item )
      );
    }
    else{
      setCartItems([...cartItems , {...product,quntity: 1}]);
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quntity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
        {...ProductExist ,quntity: ProductExist.quntity - 1}: item 
      )
      );
    }
  };

  const handleCartClearance = () =>{
    setCartItems([]);
  }
  
  return (
    <div>
      <Router>
      <Header cartItems={cartItems}/>
      <Routes productItems={productItems}
       cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}/>
        
      </Router>
      
    </div>
  );
};

export default App;
