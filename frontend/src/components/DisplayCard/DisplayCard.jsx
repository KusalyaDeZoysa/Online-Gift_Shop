import React, { useContext } from 'react'
import './DisplayCard.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const DisplayCard = ({ id, name, price, description, image }) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

    return (
        <div className='gift-Item'>
            <div className='image-Container'>
                <img className='gift-Image' src={image} />
                {!cartItems[id]? <img onClick={() => addToCart(id) } className='add' src={assets.add_icon} /> :
                    <div className='counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon}/>
                        <p className="count">{cartItems[id]}</p>
                        <img onClick={() => addToCart(id) } src={assets.add_icon} /> 
                    </div>
                }
            </div>
            <div className="item_info">
                <p className='item_name'>{name}</p>
                <p className="item_description">{description}</p>
                <p className="item_price">Rs.{price}</p>
            </div>
        </div>
    )
}

export default DisplayCard
