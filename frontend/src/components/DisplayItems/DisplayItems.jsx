import React, { useContext } from 'react'
import './DisplayItems.css'
import { StoreContext } from '../../context/StoreContext'
import DisplayCard from '../DisplayCard/DisplayCard'

function DisplayItems({ category }) {
    const { item_list } = useContext(StoreContext)
    return (
        <div className='display' id='display'>
            <h2>Explore</h2>
            <div className="display-Items">
                {item_list.map((item, index) => {
                    if (category==="All" || category===item.category) {
                        return <DisplayCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default DisplayItems
