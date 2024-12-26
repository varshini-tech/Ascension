import React from 'react';
import "../Pricing/Pricing.css";





function Pricing({image,title,price}){
    return(
        <div className='pricing-card'>
            <img src={image} alt="Wrist Length Mehandi Design"/>
            <p className='pricing-card-title'>{title}</p>
            <p className='pricing-card-price'>{price}</p>
        </div>
        

    );

}

export default Pricing;