import React from 'react';
import '../css/ProductGridContainer.css';

const ProductGridContainer = ({ products }) => {
  console.log(products);
  
  return (
    <>
    {products.map((productData) => (
    <div key={productData._id} className="productShowcaseContainer">
        <div  className="productShowcase">
          <h2>{productData.description}</h2>
          {productData.product.map((item, index) => (
          <div className="productGrid">
           
              <div className="product" key={index}>
                <div className="productImg">
                  <img src={item.ProudctUrl} alt={item.productName} />
                </div>
                <span>{item.productName}</span>
              </div>
          </div>
           ))}
          <p>{productData.option}</p>
        </div>
    </div>
    ))}
    </>
  );
};

export default ProductGridContainer;
