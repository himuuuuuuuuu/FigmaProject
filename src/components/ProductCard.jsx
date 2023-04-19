import React from 'react'
import'./ProductCard.css'
import Iphone12 from '../assets/iphone_12.png';
import StarIcon from '../assets/icons/StarIcon.svg'


function ProductCard() {
  return (
    <div className='Product_card'>
        <div className="Product_card_container">
        <div className="product_card_img">

            <img src={Iphone12}/>

        </div>

        <div className="product_card_info">
            <h3>Apple iphone 13 128GB -Blue</h3>
            <div className="product_card_body">
                <div className="product_card_rating">

                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                    <img src={StarIcon}/>
                </div>
                <div className="product_card_price">
                    <h4>$1,299.99</h4>
            </div>
        </div>

        </div>

        <div className="product_card_btns">
            <button className="product_card_btns" >Add to cart</button>
        </div>

    </div>
    </div>
  )
}

export default ProductCard