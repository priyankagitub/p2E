
import React from 'react'
import "./Products.css";
import Rating from './Rating/Rating';


const Products =({productItems ,handleAddProduct}) =>{
  return (
    <div className="products">
      {productItems.map((productItem) =>(
        <div className="card">
          <div>
           
            <img className="product-image"
             src={productItem.image}
              alt={productItem.name}/>
          </div>

          <div>
            <h3 className="product.name">{productItem.name}</h3>

          </div>

          <div className="product-catagory">{productItem.catagory}

          </div>

          <div className="product-price">${productItem.price}
          </div>

          <div className="product-Rating">{productItem.rating}
          <Rating value={productItem.rating} text={`${Products.numReviews} reviews`}/>
          </div>

           <div>
          <button className="product-add-button" 
          onClick={() =>{handleAddProduct(productItem)}}
          >
            Add to cart
            </button>
         </div>

        </div>

     ))}
    </div>
  );
};

export default Products;