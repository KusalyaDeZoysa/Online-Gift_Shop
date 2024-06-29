import React from 'react'
import './ExploreItem.css'
import { category_list } from '../../assets/assets'

const ExploreItem = ({ category, setCatergory }) => {
    return (
        <div className='exploreItems' id='exploreItems'>
            <h2>Browse by Catergory</h2>
            <p className='exploreItems-text'>Explore our diverse range of delightful and thoughtful gifts,
                from personalized treasures to stylish finds. With Gifty, giving a gift is more than just a
                transaction—it's an experience, a way to connect, to show love, and to celebrate life’s precious
                moments.
            </p>
            <div className='ItemCatergory-List'>
                {category_list.map((item, index) => {
                    return (
                        <div onClick={() => setCatergory(prev => prev === item.category_name ? "All" : item.category_name)} key={index} className='exploreCatergory-Item'>
                            <img className={category === item.category_name ? "active" : ""} src={item.category_image} alt="" />
                            <p>{item.category_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreItem
