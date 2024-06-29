import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreItem from '../../components/ExploreItem/ExploreItem'
import DisplayItems from '../../components/DisplayItems/DisplayItems'

const Home = () => {
  const [category,setCatergory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreItem category={category} setCatergory={setCatergory}/>
      <DisplayItems category={category}/>
    </div>
  )
}

export default Home
