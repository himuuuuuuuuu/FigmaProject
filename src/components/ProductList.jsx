import React from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'

function ProductList() {
  return (
    <div className='Product_section'>
        <div className="Product_section_container">
            <h2>Products</h2>
            <div className="Product_list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default ProductList