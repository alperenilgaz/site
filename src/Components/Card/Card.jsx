import React from 'react'
import './Card.css'
import Data from "./Data/CardData.json"
import CardItem from './CardItem.jsx'



const Card = () => {
  return (
    <>
      <div className="card">
        {
          Data.map((item, key) => (
            <CardItem item={item} key={key} />
          ))
        }
      </div>
     
    </>
  )
}

export default Card